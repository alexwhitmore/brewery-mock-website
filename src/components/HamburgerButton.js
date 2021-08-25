import React, { useState, Fragment } from 'react';
import '../styles/hamburger-styles.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { menuItems } from '../config';
import Icon from '../components/icons/icon';
import clsx from 'clsx';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  makeStyles,
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
        {menuItems &&
          menuItems.map(({ name, url }, i) => (
            <ListItem button key={i} className='footer-item'>
              <ListItemIcon style={{ color: '#d74229' }}>
                <Icon name={name} />
              </ListItemIcon>
              <ListItemText primary={name} />
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
            <MenuRoundedIcon fontSize='large' className='hamburger-svg' />
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
