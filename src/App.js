import React from 'react';
// import { Route } from 'react-router-dom';
import bgdeco from './bgDecoration.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .content {
    border: 2px solid red;

  }

`;

function App() {
  return (
    <AppStyles>
      <Header />
        <Banner />
      <section className='content'>
hi
      </section>
      <Footer />
    </AppStyles>
  );
}

export default App;
