import React, { useState } from 'react';
import SelectSubCategory from './SelectSubCategory';

const Avatarlist = props => {
  const [clicked, setClicked] = useState(false);

  const displaySubCategory = props => {
    setClicked(true);
  };
  if (clicked) {
    return (
      <SelectSubCategory
        id={props.id}
        name={props.name}
        categoryid={props.categoryid}
        name={props.name}
      />
    );
  }

  return (
    <div className="avatarstyle" onClick={displaySubCategory}>
      {<img alt="Not available" src={props.src} />}
      <p> {props.name}</p>
    </div>
  );
};

export default Avatarlist;
