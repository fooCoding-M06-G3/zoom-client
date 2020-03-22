import React, { useEffect, useState } from 'react';

import ProductCard from '../components/ProductCard';

export default function ProductScreen({ items }) {
  console.log(items);
  return (
    <div className="productContent">
      {items.map(item => {
        let newDate = item.date;
        let dateFormat = newDate.slice(0, 10);
        return (
          <ProductCard
            name={item.title}
            src={item.imageurl_1}
            price={item.price}
            city={item.city}
            date={dateFormat}
            id={item.productid}
          />
        );
      })}
    </div>
  );
}
