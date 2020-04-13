import React, { useState, useEffect } from 'react';
import ProductsDetailsComponent from '../components/ProductsDetailsComponent'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProductsDetailsScreen(props) {

  console.log(props.match.params.id);

  const postId = props.match.params.id

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://api-zoom.herokuapp.com/getproductdetails?id=${postId}`)
      .then(response => response.json())
      .then(result => {
        setProduct(result)
      })
  }, [])


  return (
    <>
      {
        product.length === 0 ? <div style={{ minHeight: '62vh' }}>{CircularProgress}</div> :
          < ProductsDetailsComponent items={product} />
      }
    </>
  )
}
