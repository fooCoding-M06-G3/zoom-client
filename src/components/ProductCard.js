import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '20vw',
    margin: 15,
  },
  media: {
    height: '35vh',
    width: '100%',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '90%',
    borderTop: '1px solid #CCC',
  },
  title: {
    fontSize: '1.4em',
    textAlign: 'left',
  },
  city: {
    fontSize: '1.3em',
    color: '#CCC',
    textAlign: 'left',
  },
});

export default function ProductCard({ id, src, name, price, city, date }) {
  const classes = useStyles();

  return (
    <Link
      to={{
        pathname: `/item/${id}&${name}`,
        details: { id },
      }}
      style={{ textDecoration: 'none' }}
      onClick={() => localStorage.setItem('productId', id)}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={src} />
          <CardContent className={classes.details}>
            <Typography className={classes.title}>{name}</Typography>
            <Typography className={classes.title}>{price} SEK</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography className={classes.city}>{city}</Typography>
              <Typography className={classes.city}>{date}</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
