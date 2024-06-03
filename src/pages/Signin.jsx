import React, { useEffect, useState } from 'react';
import { GoogleButton } from 'react-google-button';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from 'firebase/auth';
import backgroundImage from './background.png'; // Import your background image

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleEmailSignIn = async () => {
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  const containerStyle = {
    backgroundColor: 'pink',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000000', // Text color black
    textAlign: 'center',
  };

  const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Opaque white
    padding: '20px',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      <h1 className='text-3xl font-bold py-8 text-black'>Sign in</h1> {/* Title in black */}
      <div style={boxStyle} className='max-w-[240px] py-4'>
        <input type="email" placeholder="Email" className="block w-full border border-gray-300 rounded-md mb-2 px-4 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="block w-full border border-gray-300 rounded-md mb-2 px-4 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleEmailSignIn} className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mb-4">Sign In</button>
        <p className="mb-2 text-black">OR</p> {/* "or" in black */}
        <button onClick={handleGoogleSignIn} className="bg-purple-500 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded mb-4">Sign In with Google</button>
        <button onClick={handleLogout} className="bg-purple-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mb-4">Log Out</button>
      </div>
    </div>
  );
};

export default SignIn;
