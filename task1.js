import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    setBackgroundColor(prevColor => prevColor === 'white' ? 'lightblue' : 'white');
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h1>Change Background Color</h1>
        <button onClick={toggleBackgroundColor}>Toggle Color</button>
      </div>
    </div>
  );
}

export default App;