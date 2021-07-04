const Button = ({ identity, identityNumber }) => {
  return <button onClick={() => identity(identityNumber)}>Click Me</button>;
};

export default Button;
