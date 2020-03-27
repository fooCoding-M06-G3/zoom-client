import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const SubCategoryProductList = props => {
  console.log(props.selectedSubCategory);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const request = fetch('/getSubCategoryProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ category: props.selectedSubCategory }),
    });
    request
      .then(response => response.json())
      .then(products => {
        setProducts(products);
      });
  }, []);
  return <ProductList productList={products} />;
};
export default SubCategoryProductList;
