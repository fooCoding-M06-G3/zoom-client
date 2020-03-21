import React from 'react';
import SubCategoryProductList from '../components/SubCategoryProductList';

export default function SubCategoryProductListScreen(props) {
  return <SubCategoryProductList selectedSubCategory={props.location.state.selectedSubCategory} />;
}
