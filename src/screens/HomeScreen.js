import React from "react";
import "../App.css";
import Avatar from "../components/avatarcomponent/Avatar";
import ProductScreen from "./ProductScreen";
import { Typography } from '@material-ui/core'

export default function HomeScreen() {
  return (
    <div className="main-image">
      <img
        src="https://www.rajasthantourplanner.com/images/rajasthan-Shopping-tour.jpg"
        alt="mainImage"
      />
      <Avatar />
      <Typography variant='h3'> Recently Published </Typography>
      <ProductScreen />
    </div>
  );
}
