import React from 'react';
import { Route } from 'react-router-dom';
import bg from './bgDecoration-01.svg';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Route path='/' component={Header} />
      <img scr={bg} alt='logo' />

    </div>
  );
}

export default App;
