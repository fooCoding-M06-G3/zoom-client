import React, { useState, useEffect } from 'react';
import ProductsDetailsComponent from '../components/ProductsDetailsComponent'
import CircularProgress from '@material-ui/core/CircularProgress';

export default function ProductsDetailsScreen(props) {



  const postId = window.location.pathname.split('/')[2];
  // console.log(props.location.state.id);
  console.log('id', postId);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://api-zoom.herokuapp.com/getproductdetails?id=${postId}`)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setProduct(result)
      })

  }, [])


  return (
    <>
      {
        product.length === 0 ? <div style={{ minHeight: '62vh' }}>No Items found</div> :
          < ProductsDetailsComponent items={product} />
      }
    </>
  )
}
