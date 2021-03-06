import React, { useState, useEffect } from 'react';
import { animated, useTransition, config } from 'react-spring';
import styled from 'styled-components';

const BannerStyles = styled.div `
  color: blueviolet;
  border: 1px solid blue;

  .banner {
    text-align: center;
    font-size: 3rem;
  }
  .banner:nth-child(2) {
    border: 1px solid yellow;
  }
`;

function Banner() {
  const [items] = useState([
    {title: 'Star Charts', id: 0},
    // {title: 'Discover The Worlds Beyond', id: 1}
  ]);
  const [index, setIndex] = useState(0);

  const fadingTextPropsTransition = useTransition(items[index], item => item.id, {
    from: { opacity: 0, marginLeft: -100 },
    enter: { opacity: 1, marginLeft: 0 },
    leave: { opacity: 0, marginLeft: 100 },
    config: { tension: 280, friction: 60 }
  });

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((state) => (state + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
}, [items.length]);

  return (
    <BannerStyles>
      {fadingTextPropsTransition.map(({ item, props, key }) => (
        <animated.div className="banner"
          key={key}
          style={{ ...props, position: 'relative', right: 0, left: 0  }}
        >
          <p>
            {item.title}
          </p>
        </animated.div>
      ))}
    </BannerStyles>
  );
}

export default Banner;
