import React from "react";

const Checkbox = ({ id, name, ...rest }) => {
  return (
    <React.Fragment>
      <input className="dd-checkbox" id={id} {...rest} />
      <label className="dd-filter" htmlFor={id}>
        {name}
      </label>
    </React.Fragment>
  );
};

export default Checkbox;
