import React from 'react';
import '../styles/header-styles.css';

import HamburgerButton from '@components/HamburgerButton';
import { Box } from '@material-ui/core';

const Header = () => {
  return (
    <>
      <Box className='header-wrapper'>
        <a href='/' className='header-left'>
          West Hartford Brewing
        </a>

        <HamburgerButton />

        <Box className='menu-items-wrapper'>
          <a href='#' className='menu-items'>
            Our Beer
          </a>
          <a href='#' className='menu-items'>
            Menu
          </a>
          <a href='#' className='menu-items'>
            About
          </a>
          <a href='#' className='menu-items'>
            Contact
          </a>
        </Box>
      </Box>
    </>
  );
};

export default Header;
