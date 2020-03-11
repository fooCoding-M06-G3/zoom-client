import React from 'react';
import ProductList from '../components/ProductList';

export default function ProductListScreen(props) {
  return <ProductList productList={props.location.state.productList} />;
}
