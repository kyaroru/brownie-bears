import React from 'react';
import Brownie from './Brownie.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Brownie} className="App-logo" alt="logo" />
        <p>
         Hello, I'm Brownie from Malaysia
        </p>
        <a
          className="App-link"
          href="http://www.kyaroru.com"
        >
          kyaroru.com
        </a>
      </header>
    </div>
  );
}

export default App;
