import React from 'react';
import { Route } from 'react-router-dom';
import bgdeco from './bgDecoration.svg';
import Header from './components/Header';
import styled from 'styled-components';

const AppStyles = styled.div `
  width: 100%;
  background-color: rgb(8, 8, 37);
  background-image: url(${bgdeco});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 170%;
  background-size: 55% 200%;
  position: absolute;
  top: 0;
  bottom: 0;

`;

function App() {
  return (
    <AppStyles>
      <Route path='/' component={Header} />

    </AppStyles>
  );
}

export default App;
