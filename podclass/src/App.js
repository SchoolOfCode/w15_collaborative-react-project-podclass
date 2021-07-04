import React from "react";
import { useState } from "react";
import "./App.css";
import { contentData, titles } from "./pageContent";
import Button from "../src/components/Button";
import Heading1 from "../src/components/h1";
import Main from "../src/components/Main";
import Display from "./components/Display";

function App() {
  const [content, setContent] = useState([contentData]);

  const [contentState, setContentState] = useState("");

  function changeState(key) {
    setContentState(key);
    console.log("hello", contentState);
  }

  return (
    /* contentData.map((contentData) => {
      <p key={`${contentData.id}`}>{contentData.header} </p>}); */

    <div>
      {titles.map(
        (button) =>
          (button = (
            <Button
              key={button}
              buttonName={button}
              identity={changeState}
              identityNumber={titles.indexOf(`${button}`)}
            />
          ))
      )}

      {titles.map(
        (heading) =>
          (heading = <Heading1 key={heading} mainHeading={heading} />)
      )}

      <div className="content">
        <Display
          content={contentData.filter((content) => content.id === contentState)}
        />
      </div>
    </div>
  );
}

export default App;
