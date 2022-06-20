import React from "react";

const Button = ({ logo, identity, identityNumber, buttonName, className, changeButtonClass }) => {
   return (
   <button data-testid="button-component" className={className} onClick={() => identity(identityNumber)}>{buttonName}</button>)
}
export default Button;
