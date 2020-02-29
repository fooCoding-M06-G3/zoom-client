import React from "react";
import "../App.css";
import Avatar from "../components/avatarcomponent/Avatar";
import ProductScreen from "./ProductScreen";

export default function HomeScreen() {
  return (
    <div className="main-image">
      <img
        src="https://www.rajasthantourplanner.com/images/rajasthan-Shopping-tour.jpg"
        alt="mainImage"
      />
      <Avatar />
      <h4>Recently Published</h4>
      <ProductScreen />
    </div>
  );
}
