import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import PostItemScreen from "./screens/PostItemScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductsDetailsScreen from "./screens/ProductsDetailsScreen";
import AdminScreen from "./screens/AdminScreen";
import EditPostComponent from "./components/EditPostComponent";
import Footer from "./components/footercomponent/Footer";
import SubCategoryProductListScreen from './screens/SubCategoryProductListScreen';


function App() {


  const [title, setTitle] = useState('ZOOM');
  const [href, setHref] = useState(window.location.pathname);


  useEffect(() => {
    localStorage.getItem('userId') !== null && setTitle('Khan')
  });
  return (
    <>
      <Router>

        <Navbar title={title} />

        <Switch>
          <div className="mainContent">

            <Route exact path="/item/:id/:title" component={ProductsDetailsScreen} />
            <Route exact path="/signin" component={SignInScreen} />
            <Route exact path="/signup" component={SignUpScreen} />
            <Route exact path="/postitem" component={PostItemScreen} />
            <Route exact path="/editpost" component={EditPostComponent} />
            <Route exact path="/adminpanel" component={AdminScreen} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/productList" component={ProductListScreen} />

          </div>
        </Switch>
        <Footer />
      </Router>
    </>

  );
}

export default App;
