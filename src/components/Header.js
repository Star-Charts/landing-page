import React from 'react';
import logo from '../spacequestlogo-03.svg';
import styled from 'styled-components';

const HeaderStyles = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;

  img {
    width: 6rem;
  }
    
  .button div:nth-child(1) {
    border-radius: 0.25rem 0 0 0.25rem;
    border-right: 0;
  }
  
  .button div {
    color: #4E3F99; /*Medium purple*/
    text-align: center;
    font-weight: 500;
    display: inline-block;
    background: transparent;
    padding: .3rem 0;
    width: 6rem;
    border: 2px solid #222050; /*Darker purple*/
    border-radius: 0 0.25rem 0.25rem 0;
    transition: background-color .2s;

    :hover {
      background-color: #222050; /*Darker purple*/
    }

  }



`;

function Header() {
  return (
    <HeaderStyles>
      <img src={logo} alt='logo' />
      <div className='button'>
        <div>Login</div>
        <div>Register</div>
      </div>
    </HeaderStyles>
  );
}

export default Header;
