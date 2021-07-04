const Display = ({ content }) => {
  return (
    <div className="display">
      {content.map((item) => (
        <div className="displayText" key={item.id}>
          <h2>{item.header}</h2>
          <p>{item.textContent}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
