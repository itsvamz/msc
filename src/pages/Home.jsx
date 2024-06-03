import React, { useState } from 'react';

const Home = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [counter, setCounter] = useState(0);

  const handleButtonClick = () => {
    setShowNotification(true);
  };

  const handleCloseClick = () => {
    setShowNotification(false);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{ backgroundColor: 'pink' }}>
      <div className="bg-white p-8 rounded shadow-md mb-4 text-center">
        <h1 className="text-2xl font-bold mb-2">Welcome to My React App</h1>
        <p className="mb-4">This is a Basic Jumbotron. You can personalize it however you want!<br />
          This is a simple React app with a navbar, jumbotron, sign-in (using Firebase), and about pages.
        </p>
        <button onClick={handleButtonClick} className="bg-purple-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">Click Me</button>
        {showNotification && (
          <div className="absolute top-0 right-0 m-4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
            <p>Button clicked</p>
            <button onClick={handleCloseClick} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mt-2">Close</button>
          </div>
        )}
      </div>
      <div className="bg-white p-8 rounded shadow-md text-center">
        <h2 className="text-xl font-bold mb-2">Counter</h2>
        <div className="mb-4">
          <div>{counter}</div>
          <div className="flex justify-center items-center mt-2">
            <button onClick={handleDecrement} className="bg-purple-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded mr-2">Decrement</button>
            <button onClick={handleIncrement} className="bg-purple-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded ml-2">Increment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
