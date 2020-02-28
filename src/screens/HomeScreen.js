import React from "react";
import "../App.css";
import Avatar from "../components/avatarcomponent/Avatar";

export default function HomeScreen() {
  return (
    <div className="main-image">
      <img
        src="https://files.slack.com/files-pri/T73PFJU13-FUKQ9AZF0/cartzzz.jpg"
        alt="mainImage"
      />
      <Avatar />
    </div>
  );
}
