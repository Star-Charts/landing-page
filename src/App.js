import React from 'react';
import QueueAnim from 'rc-queue-anim';
// import { Route } from 'react-router-dom';
import bgdeco from './bgDecoration.svg';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppStyles = styled.div `
  color: blueviolet;
  font-weight: lighter;
  background-color: rgb(8, 8, 37);
  /* background-image: url(${bgdeco});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center right; */
  /* background-position: 0 0 700px 0; */
  /* background-size: 55% 200%; */
  /* background-size: contain;
  position: absolute;
  top: 0;
  bottom: 0; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
  border: 2px solid yellow;

  .content {
    border: 2px solid red;
    display: flex;
    

    img {
      z-index: 2;
      max-width: 50rem;
      min-width: 41rem;
      position: fixed;
      right: -30em;
    }

    h2 {
      /* border: 1px solid #222050; */
      border-radius: .25rem;
      box-shadow: 2px 2px 5px #222050;
      padding: 1rem 5rem;
    }

  }

`;

function App() {
  return (
    <AppStyles>
      <Header />
      <Banner />
      <section className='content'>
        <QueueAnim>
          <h2 key='1'>Add New Charts</h2>
          <h2 key='2'>Save Chart Collections</h2>
          <h2 key='3'>Customize your Chart Features</h2>
          <h2 key='4'>Discover New Locations</h2>
        </QueueAnim>
        <img src={bgdeco} alt='BGImage' />
        
      </section>
      <Footer />
    </AppStyles>
  );
}

export default App;
