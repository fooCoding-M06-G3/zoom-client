import React from "react";
import "./App.css";
// import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import SidebarComponent from "./components/SidebarComponent";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";

function App() {
  return (
    <div className="App">
      <SidebarComponent />
    </div>
  );
}

export default App;
