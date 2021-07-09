import React from "react";

const Button = ({ identity, identityNumber, buttonName, className, changeButtonClass }) => {
  return <button className={className} onClick={() => identity(identityNumber)}
      >{buttonName}</button>;
  }

export default Button;
