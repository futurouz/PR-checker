import React from "react";

const Checkbox = props => (
  <div className="checklist">
    <input
      name={props.name}
      type="checkbox"
      onChange={props.onHandleCheckbox}
      checked={props.checked}
    />
    {props.label}
  </div>
);

export default Checkbox;
