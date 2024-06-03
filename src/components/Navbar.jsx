import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import backgroundImage from '../pages/background.png';
import './Navbar.css'; // Import external CSS file for styling

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const renderAuthButton = () => {
    if (user?.displayName) {
      return (
        <button onClick={handleSignOut} className='nav-btn'>Logout</button>
      );
    } else {
      return (
        <Link to='/signin' className='nav-btn'>Sign in</Link>
      );
    }
  };

  return (
    <div className='navbar-container'>
      <div className='navbar-background' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className='brand'></h1>
        <div className='nav-links'>
          <Link to='/' className='nav-btn'>Home</Link>
          <Link to='/about' className='nav-btn'>About</Link>
          <Link to='/flower' className='nav-btn'>Flowers</Link>
          {renderAuthButton()}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
