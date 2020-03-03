import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header/Header';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Body />
      </Router>
    </div>
  );
}

export default App;
