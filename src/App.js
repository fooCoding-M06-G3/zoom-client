import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar title='ZOOM' navLink1='Sign In' navLink2='Start Selling' />

      </div>

      <div className='mainContent'>
        <Switch>
          <Route path='/'>
            <HomeScreen />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
