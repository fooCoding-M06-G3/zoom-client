import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '50vw',
    marginTop: '5vh',
    marginLeft: '25vw',
  },
  media: {
    height: '55vh',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '90%',
    borderTop: '1px solid #CCC',
  },
  title: {
    textAlign: 'left',
    paddingBottom: 20,
    marginTop: 20,
  },
  price: {
    textAlign: 'left',
    marginTop: 20,
    fontSize: '1.5em',
    color: 'green'
  },
  city: {
    fontSize: '1.3em',
    color: '#999',
    textAlign: 'left',
  },
  description: {
    fontSize: '1.2em',
    textAlign: 'left',
    color: '#424242',
    marginTop: 20,
    lineHeight: 2,
  },
});

export default function ProductsDetailsComponent({ items }) {
  const classes = useStyles();

  return (
    items.map(item => {
      return (
        <Card className={classes.root} elevation={0}>

          <CardMedia className={classes.media} image={item.imageurl_1} />
          <CardContent className={classes.details}>
            <Typography className={classes.city}>
              {item.city}
            </Typography>
            <Typography variant='h4' className={classes.title}>
              {item.title}
            </Typography>
            <Divider />

            <Typography className={classes.price}>
              {item.price} SEK
              </Typography>

            <Typography className={classes.description} >
              {item.description}
            </Typography>
            <br />
            <Divider />
            <br />
            <Typography className={classes.city}>
              Contact Seller: {item.phonenumber}
            </Typography>

          </CardContent>

        </Card >
      )
    }
    ))
}
