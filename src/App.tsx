import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <div>
        <h1>Hello World</h1>
        <p>This is <a href="https://julianklummer.me">Julian-Kl</a>'s React Boilerplate</p>
        <h2>Includes:</h2>
        <ul>
          <li>TypeScript</li>
          <li>SASS</li>
          <li>React Router</li>
        </ul>
        <h2>CSS Files</h2>
        <ul>
          <li>Normalize</li>
        </ul>
      </div>
    </React.Fragment>
  );
}

export default App;
