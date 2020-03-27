import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { formatDistanceStrict } from 'date-fns/esm'
const dateTime = require('date-time');

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
    width: '100%',
  },

  title: {
    fontSize: '1.1em',
    textAlign: 'left',
    width: '60%',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  price: {
    fontSize: '1.1em',
    textAlign: 'left',
    color: 'green'
  },
  time: {
    fontSize: '0.9em',
    textAlign: 'left',
    color: '#CCC'
  }
});

export default function ProductCard({ id, src, name, price, city, date }) {
  const classes = useStyles();


  const postDate = date;

  const distance = formatDistanceStrict(
    new Date(postDate),
    new Date(dateTime())
  )


  return (
    <Link to={{
      pathname: `/item/${id}&${name}`, details: { id }
    }} style={{ textDecoration: 'none' }} onClick={() => localStorage.setItem('productId', id)} >
      <Card className={classes.root} >
        <CardActionArea>

          <CardMedia className={classes.media} image={src} />

          <CardContent className={classes.details}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography noWrap className={classes.title}>
                {name}
              </Typography>
              <Typography className={classes.price}>
                {price} SEK
              </Typography>
            </div>

            <Typography className={classes.time}>
              {distance} ago in {city}
            </Typography>

          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
