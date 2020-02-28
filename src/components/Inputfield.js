import React from 'react';

function InputField(props) {
  return (
    <div className="mdl-textfield mdl-js-textfield">
      <label className="mdl-textfield__label" for={props.for}></label>
      {props.children}
      <br />
      <input
        className="mdl-textbox__input"
        type={props.type}
        id={props.id}
        onChange={event => props.onChange(event)}
      />
    </div>
  );
}
export default InputField;
