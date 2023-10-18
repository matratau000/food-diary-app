import type { AppProps } from 'next/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getApps } from 'firebase/app';
import { initializeFirebase } from '@/contexts/firebase/firebaseConfig';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    initializeFirebase();
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push('/login');
      }
    });
  }, [router]);

  return isAuthenticated ? <Component {...pageProps} /> : null;
}

export default MyApp;
