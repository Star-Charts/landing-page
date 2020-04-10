import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Route path='/' component={Header} />
    </div>
  );
}

export default App;
