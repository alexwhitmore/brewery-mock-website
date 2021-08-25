import React, { useState, useSelector } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BeerImageOne from '../images/beer-image-1.jpg';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #dfd3a8;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    background: '#1b2533',
    color: '#f5f5f5',
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const Featured = ({ featuredSection }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded((expanded) => ({
      ...expanded,
      [id]: !expanded[id],
    }));
  };

  const card = featuredSection.map((item, i) => {
    return (
      <div
        className='innerCard-wrapper'
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '2rem 2rem 2rem 2rem',
          height: '100%',
        }}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={require(`../images/${item.name}.jpg`).default}
            title={item.title}
          />
          <CardContent>
            <Typography style={{ paddingBottom: '1rem' }}>
              {item.title}
            </Typography>
            <Typography variant='body2' component='p'>
              {item.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              style={{ color: '#f5f5f5' }}
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={(id) => handleExpandClick(item.id)}
              aria-expanded={expanded}
              aria-label='show more'>
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded[item.id]} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>
                <strong style={{ color: '#d74229' }}>Malt: </strong>
                {item.malt}
                <br />
                <strong style={{ color: '#d74229' }}>Hops: </strong>
                {item.hops}
                <br />
                <strong style={{ color: '#d74229' }}>Tasting Notes: </strong>
                {item.notes}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  });

  return <CardWrapper>{card}</CardWrapper>;
};

export default Featured;
