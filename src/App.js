import React from 'react';
import Calculator from './Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
          <header><b>React Calculator</b></header>
    {/* this is creating an instace of Calculator */}
    <Calculator />
    </div>
  );
}

export default App;
