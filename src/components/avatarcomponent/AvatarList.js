import React from "react";
// import Avatar from "./Avatar";
// import Nav from "./Nav";

const Avatarlist = props => {
  return (
    <div className="avatarstyle">
      {/* <img
        src={
          "https://c.static-nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/eric5lwitzffpoisq0rj/blazer-mid-77-vintage-shoe-pMfjs8.jpg"
        }
        alt="Avatar"
      /> */}
      {<img alt="Not available" src={props.src} />}
      {/* {props.src} */}
      <p> {props.name}</p>
      <p>{props.category}</p>
    </div>
  );
};

export default Avatarlist;
