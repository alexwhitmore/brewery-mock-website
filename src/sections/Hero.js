import React from 'react';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import HeroImage from '../images/hero-image.jpg';

const MiddleHeroWrapper = styled.div`
  height: calc(100vh - 132px);
  background-image: url(${(props) => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 132px;
    height: calc(100vh - 112px);
    width: 100%;
    background-color: black;
    opacity: 0.7;
  }

  @media screen and (min-width: 324px) {
    height: calc(100vh - 112px);

    &:after {
      top: 112px;
      height: calc(100vh - 112px);
    }
  }

  @media screen and (min-width: 435px) {
    height: calc(100vh - 107px);

    &:after {
      top: 107px;
      height: calc(100vh - 107px);
    }
  }

  @media only screen and (min-width: 800px) {
    height: calc(100vh - 92px);

    &:after {
      top: 92px;
      height: calc(100vh - 92px);
    }
  }

  h1 {
    color: #fff;
    z-index: 10;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-align: center;
  }

  p {
    color: white;
    z-index: 10;
    text-align: center;
    padding: 1rem 0 1rem 0;
    font-size: 1.25em;
    letter-spacing: 0.15em;
  }

  .hero-button {
    z-index: 10;
    background: #d74229;
    color: #1b2533;

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Hero = () => {
  return (
    <>
      <MiddleHeroWrapper img={HeroImage}>
        <h1>West Hartford Brewing</h1>
        <p>
          Come visit the <strong>best</strong> brewery in CT!
        </p>
        <Button variant='contained' size='large' className='hero-button'>
          Learn More
        </Button>
      </MiddleHeroWrapper>
    </>
  );
};

export default Hero;
