import React from 'react';
import footerImg from '../footerImg.svg';
import styled from 'styled-components';

const FooterStyles = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-content: center; */
  color: #4E3F99;
  border: 1px solid red;
  

  
  .fooImg {
    text-align: center;
    /* width: 100%; */
    height: 22rem;
    background-image: url(${footerImg});
    background-repeat: repeat-x;
    /* background-attachment: fixed; */
    background-position: center bottom;
    background-size: contain;
    border: 1px solid red;
    
    p {
      text-align: center;
      position: fixed;
      bottom: 1rem;
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
      <div className='fooImg' >
        <p>Copyright 2020 Star-Chart</p>
      </div>
        {/* <img src={footerImg} alt='SpaceBG' /> */}
    </FooterStyles>
  );
}

export default Footer;
