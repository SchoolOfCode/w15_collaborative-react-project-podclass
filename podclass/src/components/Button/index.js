import React from "react";
// import Logo from "../../Images/logoButton.png";

const Button = ({ logo, identity, identityNumber, buttonName, className, changeButtonClass }) => {
   return (
   <button className={className} onClick={() => identity(identityNumber)}>{buttonName}</button>)
}
export default Button;
