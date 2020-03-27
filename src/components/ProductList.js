import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import ProductCard from './ProductCard';

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
export default function ProductList(props) {
  const classes = useStyles();
  return (
    <div className="productContent" style={{ marginTop: 100 }}>
      {props.productList.map(item => {
        return (
          <ProductCard
            id={item.productid}
            src={item.imageurl_1}
            name={item.title}
            city={item.cityname}
            price={item.price}
            date={item.date}
          />
        );
      })}
    </div>
  );
}
