import React from 'react';
import "../App.css";
import CircularProgress from '@material-ui/core/CircularProgress';


import ProductCard from '../components/ProductCard';

export default function ProductScreen({ items, isLoading }) {

  console.log(items)

  return (
    <div className='productContent'>
      {isLoading === true ? <CircularProgress /> :

        items.map((item, i) => <ProductCard key={i} name={item.title} src={item.imageurl_1} price={item.price} city={item.city} id={item.productid} date={item.date} />)}

    </div>
  );
}
