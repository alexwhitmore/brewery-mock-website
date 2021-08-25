import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import LocalDrinkRoundedIcon from '@material-ui/icons/LocalDrinkRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';

const Icon = ({ name }) => {
  switch (name) {
    case 'Instagram':
      return <InstagramIcon />;
    case 'Twitter':
      return <TwitterIcon />;
    case 'YouTube':
      return <YouTubeIcon />;
    case 'Facebook':
      return <FacebookIcon />;
    case 'Our Beer':
      return <LocalDrinkRoundedIcon />;
    case 'Menu':
      return <FastfoodRoundedIcon />;
    case 'About':
      return <InfoRoundedIcon />;
    case 'Contact':
      return <MailRoundedIcon />;
    default:
      return null;
  }
};

export default Icon;
