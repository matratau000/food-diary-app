import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Button } from '@mui/material';
import { Button as ShadecnButton } from '@/components/ui/button';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebase/firebaseConfig.ts';
import { getApps } from 'firebase/app';

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const auth = getAuth();


const googleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error(error.message);
  }
};

const registerUser = async (email: string, password: string) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
  }
};

const emailSignIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error.message);
  }
};


const Login: React.FC = () => {
  return (
    <div className="login-container">
      <Button variant="contained" color="primary" onClick={googleSignIn}>
        Sign in with Google
      </Button>
      <ShadecnButton onClick={/* function to toggle email registration/login UI */}>
        Sign in with Email
      </ShadecnButton>
      {/* UI for email registration/login */}
    </div>
  );
};

export default Login;
