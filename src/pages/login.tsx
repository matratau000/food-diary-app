import React from 'react';
import { Button as ShadecnButton } from '@/components/ui/button';
import { Button } from '@mui/material';
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';

const Login: React.FC = () => {
  const auth = getAuth();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEmailPasswordLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <ShadecnButton onClick={handleGoogleLogin}>Login with Google</ShadecnButton>
      <Button variant="outlined" color="primary" onClick={() => handleEmailPasswordLogin('user@example.com', 'password123')}>Login with Email</Button>
    </div>
  );
};

export default Login;
