import React from 'react';

const SearchBar = props => {
  const doSearch = query => {
    const request = fetch('/queryProducts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: query }),
    });
    request.then(response => {
      response.json().then(json => {
        console.log(json);
      });
    });
  };
  const onChange = event => {
    const query = event.target.value;
    doSearch(query);
  };
  return (
    <div>
      <input type="text" name="query" onChange={onChange} />
    </div>
  );
};

export default SearchBar;
