import React from 'react';
import backgroundImage from './background.png'; // Import your background image

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffffff', // Text color
    textAlign: 'center',
    position: 'relative', // Required for hover effect on children
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    padding: '1rem',
    // Add any additional styles as needed
  };

  const hoverEffectStyle = {
    transition: 'transform 0.3s ease',
  };

  const handleHover = (event) => {
    event.target.style.transform = 'scale(1.1)';
  };

  const handleHoverOut = (event) => {
    event.target.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <h1 style={headingStyle} className='text-center text-3xl font-bold py-8'>
        Welcome to Apni Pehchan
      </h1>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        style={hoverEffectStyle}
      >
        {/* Add your beautiful component here */}
      </div>
    </div>
  );
};

export default Home;
