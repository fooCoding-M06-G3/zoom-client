import React, { Fragment, useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import SearchBar from './SearchBar';
import SelectCity from './SelectCity';

const ProductFilterBar = props => {
  let products = [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCities, setSelectedCities] = useState([]);

  const doSearch = (query, cities) => {
    const request = fetch('/queryProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    });
    request.then(response => {
      response.json().then(json => {
        if (cities.length === 0) {
          products = json;
        } else {
          products = json.filter(item => {
            for (let city of cities) {
              if (city === item.city) {
                return true;
              }
            }
            return false;
          });
        }
        props.history.push({
          pathname: '/productList',
          state: { productList: products },
        });
      });
    });
  };
  const updateQuery = query => {
    doSearch(query, selectedCities);
    setSearchQuery(query);
  };
  const updateCities = cities => {
    setSelectedCities(cities);
    doSearch(searchQuery, cities);
  };
  return (
    <Fragment>
      <SearchBar onChange={updateQuery} />
      <SelectCity onChange={updateCities} selectedCities={selectedCities} />
    </Fragment>
  );
};
export default withRouter(ProductFilterBar);
