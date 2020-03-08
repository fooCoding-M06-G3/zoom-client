import React, { useState, useEffect } from 'react';
import ProductsDetailsComponent from '../components/ProductsDetailsComponent'

export default function ProductsDetailsScreen(props) {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`/getproduct?id=${localStorage.getItem('productId')}`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setProduct(result)
      })
  }, [])


  return (
    <div>
      <ProductsDetailsComponent items={product} />
    </div>
  )
}
