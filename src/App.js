import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";
import SignInScreen from "./screens/SignInScreen";
import AddItemScreen from "./screens/AddItemScreen";

function App() {
  return (
    <Router>

      <Navbar title='ZOOM' navLink1='Sign In' navLink2='Start Selling' />


      <div className='mainContent'>
        <Switch>
          <Route path='/signin'>
            <SignInScreen />
          </Route>
          <Route path='/additem'>
            <AddItemScreen />
          </Route>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
