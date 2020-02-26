import React from "react";
import "./App.css";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Navbar from "./components/navbar/Navbar";
import SidebarComponent from "./components/SidebarComponent/Sidebar";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mainContent'>
        <SidebarComponent />
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
