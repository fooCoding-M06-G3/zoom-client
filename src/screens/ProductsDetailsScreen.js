import React, { useState, useEffect } from 'react';
import ProductsDetailsComponent from '../components/ProductsDetailsComponent'

export default function ProductsDetailsScreen(props) {

  console.log(props.match.params.id);

  const postId = props.match.params.id

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`/getproduct?id=${postId}`)
      .then(response => response.json())
      .then(result => {
        setProduct(result)
      })
  }, [])


  return (
    <>
      {
        product.length === 0 ? <div style={{ minHeight: '62vh' }}><h1>No Item found</h1></div> :
          < ProductsDetailsComponent items={product} />
      }
    </>
  )
}
