import React, { useEffect, useState } from 'react'


import ProductCard from '../components/ProductCard'

export default function ProductScreen({ items }) {


  return (
    <div className='productContent'>

      {items.map(item => <ProductCard name={item.title} src={item.url} price={item.price} city={item.city} id={item.productid} />)}

    </div>
  )
}
