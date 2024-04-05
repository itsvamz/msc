import React from 'react';
import { UserAuth } from '../context/AuthContext';
import backgroundImage from './background.png'; // Import your background image



const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust height as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff', // Text color
    textAlign: 'center',
  };

  const buttonStyle = {
    border: '1px solid #ffffff', // Button border color
    padding: '0.5rem 1rem',
    marginTop: '2rem',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <div className='w-[300px]'>
        <h1 className='text-2xl font-bold'>Account</h1>
        <div>
          <p>Welcome, {user?.displayName}</p>
        </div>
        <button onClick={handleSignOut} style={buttonStyle}>
          Logout
        </button>
      </div>
    </div>
  );
};


export default Account;
