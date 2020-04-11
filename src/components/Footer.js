import React from 'react';
import footerImg from '../footerImg.svg';
import styled from 'styled-components';

const FooterStyles = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: #4E3F99;

  .fooImg {
    text-align: center;
    width: 100%;
    height: 25rem;
    background-image: url(${footerImg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom;
    background-size: auto;

    p {
      position: fixed;
      bottom: 1rem;
      left: 0;
      right: 0;
    }
  }

`;

function Footer() {
  return (
    <FooterStyles>
      <div className='fooImg'>
        <p>Copyright 2020 Star-Chart</p>
      </div>
      
    </FooterStyles>
  );
}

export default Footer;
