import React from 'react';
import '../styles/footer-styles.css';
import styled from 'styled-components';
import Icon from '../components/icons/icon';

import { IconButton } from '@material-ui/core';
import { socialMedia } from '../config';

const FooterWrapper = styled.div`
  background: #1b2533;
  padding: 4rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  .footer-item {
    transition: transform 300ms 0s;
    list-style-type: none;
    color: #d74229;
  }

  .footer-item:hover {
    transform: translateY(-10px);
    background: rgba(0, 0, 0, 0.15);
    color: #f5f5f5;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;

    .footer-item:hover {
      background: rgba(0, 0, 0, 0);
    }
  }
`;

const LeftFooterWrapper = styled.div`
  p {
    display: none;
  }

  @media screen and (min-width: 800px) {
    display: flex;

    p {
      display: unset;
      color: #d74229;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: bold;
      padding: 1rem;
    }
  }
`;

const Footer = () => {
  return (
    <>
      <h2
        className='footer-header'
        style={{
          background: '#1b2533',
          color: 'white',
          textTransform: 'uppercase',
          textAlign: 'center',
          padding: '3rem 0 0 0',
        }}>
        West Hartford Brewing
      </h2>
      <FooterWrapper>
        <LeftFooterWrapper>
          <p>Contact</p>
          <p>Careers</p>
          <p>Terms</p>
        </LeftFooterWrapper>

        <div>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <IconButton key={i} className='footer-item'>
                <Icon name={name} />
              </IconButton>
            ))}
        </div>
      </FooterWrapper>
      <div
        className='footer-bottom'
        style={{
          background: '#1b2533',
          textAlign: 'center',
          textTransform: 'uppercase',
          paddingBottom: '1rem',
        }}>
        <a
          href='/'
          style={{
            textDecoration: 'none',
            color: '#d74229',
            fontSize: '0.75em',
          }}>
          Designed by Alex Whitmore
        </a>
      </div>
    </>
  );
};

export default Footer;
