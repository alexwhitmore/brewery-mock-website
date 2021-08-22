import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';

const Icon = ({ name }) => {
  switch (name) {
    case 'Instagram':
      return <InstagramIcon />;
      break;
    case 'Twitter':
      return <TwitterIcon />;
      break;
    case 'YouTube':
      return <YouTubeIcon />;
      break;
    case 'Facebook':
      return <FacebookIcon />;
    default:
      return null;
  }
};

export default Icon;