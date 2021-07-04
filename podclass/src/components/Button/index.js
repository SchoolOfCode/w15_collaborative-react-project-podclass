import React from "react";

const Button = ({ identity, identityNumber, buttonName }) => {
  return <button onClick={() => identity(identityNumber)}>{buttonName}</button>;
};
// function Button (props) {

//     return (
//         <button>{props.buttonName}</button>
//     )
// }

export default Button;
