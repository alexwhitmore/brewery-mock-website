import React, { useState, Fragment } from 'react';
import '../styles/hamburger-styles.css';

import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import LocalDrinkRoundedIcon from '@material-ui/icons/LocalDrinkRounded';
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import MailRoundedIcon from '@material-ui/icons/MailRounded';

import clsx from 'clsx';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  makeStyles,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: '#1b2533',
    color: '#f5f5f5',
  },
});

const HamburgerButton = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {['Our Beer', 'Menu', 'About', 'Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {text === 'Our Beer' && (
                <LocalDrinkRoundedIcon style={{ color: '#d74229' }} />
              )}
              {text === 'Menu' && (
                <FastfoodRoundedIcon style={{ color: '#d74229' }} />
              )}
              {text === 'About' && (
                <InfoRoundedIcon style={{ color: '#d74229' }} />
              )}
              {text === 'Contact' && (
                <MailRoundedIcon style={{ color: '#d74229' }} />
              )}
            </ListItemIcon>
            <ListItemText
              primary={text}
              style={{ textTransform: 'uppercase' }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className='hamburger-wrapper'>
      {['right'].map((anchor) => (
        <Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            className='hamburger-button'>
            <MenuRoundedIcon fontSize='large' style={{ color: '#D74229' }} />
          </Button>
          <SwipeableDrawer
            classes={{ paper: classes.paper }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}>
            {list(anchor)}
          </SwipeableDrawer>
        </Fragment>
      ))}
    </div>
  );
};

export default HamburgerButton;
