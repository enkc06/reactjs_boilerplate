import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <button onClick={handleClose}>close</button>
      {children}
    </div>
  );
};

export default Modal;
