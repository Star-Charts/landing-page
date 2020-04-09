import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Header} />
    </div>
  );
}

export default App;
