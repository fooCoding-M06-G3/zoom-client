// import React, { Fragment, useState } from "react";
// import { Redirect, withRouter } from "react-router-dom";
// import Avatar from "../components/avatarcomponent/Avatar";
// import SelectCategories from "./SelectCategories";

// const ProductFilterBar = props => {
//   let products = [];
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedcategories, setSelectedcategories] = useState([]);

//   const doSearch = (query, categories) => {
//     const request = fetch("/queryProducts", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ query: query })
//     });
//     request.then(response => {
//       response.json().then(json => {
//         if (categories.length === 0) {
//           products = json;
//         } else {
//           products = json.filter(item => {
//             for (let categories of categories) {
//               if (categories === item.categoriesname) {
//                 return true;
//               }
//             }
//             return false;
//           });
//         }
//         props.history.push({
//           pathname: "/productList",
//           state: { productList: products }
//         });
//       });
//     });
//   };
//   const updateQuery = query => {
//     doSearch(query, selectedcategories);
//     setSearchQuery(query);
//   };
//   const updatecategories = categories => {
//     setSelectedcategories(categories);
//     doSearch(searchQuery, categories);
//   };
//   return (
//     <Fragment>
//       <SearchBar onChange={updateQuery} />
//       <Selectcategories
//         onChange={updatecategories}
//         selectedcategories={selectedcategories}
//       />
//     </Fragment>
//   );
// };
// export default withRouter(ProductFilterBar);
