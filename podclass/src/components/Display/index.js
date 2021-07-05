const Display = ({ content }) => {
  return (
    <div className="display">
      {content.map((item) => (
        <div className="displayText" key={item.id}>
          <h1> {item.header}</h1>
          <h2>{item.subheadings[0]}</h2>
          <p>{item.textContent[0]}</p>
          <ul><li>{item.checklist}</li></ul>
          <h2>{item.subheadings[1]}</h2>
          <p>{item.textContent[1]}</p>
          <h2>{item.subheadings[2]}</h2>
          <p>{item.textContent[2]}</p>
          <h2>{item.subheadings[3]}</h2>
          <p>{item.textContent[3]}</p>
          <h2>{item.subheadings[4]}</h2>
          <p>{item.textContent[4]}</p>
        </div>
      ))}
    </div>
  );
};

export default Display;
