import React from "react";

const Input = ({ name, error, ...rest }) => {
  return (
    <div>
      <input id={name} name={name} {...rest} />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
