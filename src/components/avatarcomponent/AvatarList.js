import React from "react";

const Avatarlist = props => {
  return (
    <div className="avatarstyle">
      {<img alt="Not available" src={props.src} />}

      <p> {props.name}</p>
      <p>{props.category}</p>
    </div>
  );
};

export default Avatarlist;
