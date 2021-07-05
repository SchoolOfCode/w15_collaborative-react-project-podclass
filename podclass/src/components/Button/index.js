import React from "react";

const Button = ({ identity, identityNumber, buttonName }) => {
  return <button onClick={() => identity(identityNumber)}>{buttonName}</button>;
}

export default Button;
