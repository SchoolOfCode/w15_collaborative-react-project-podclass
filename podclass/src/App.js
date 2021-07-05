import React from "react";
import { useState } from "react";
import "./App.css";
import { contentData, titles } from "./pageContent";
import Button from "../src/components/Button";
import Heading1 from "../src/components/h1";
import Main from "../src/components/Main";
import Display from "./components/Display";

import Modal from "./Modal/Modal";

const buttonWrapperStyles = {
  position: 'relative',
  zIndex: 1,
}

function App() {

  const [isOpen, setIsOpen] = React.useState(false)
  return (
    /* contentData.map((contentData) => {
      <p key={`${contentData.id}`}>{contentData.header} </p>}); */
   <>
   <div style={buttonWrapperStyles}>
      <button onClick={()=> setIsOpen(true)}>
        Checklist
      </button>

      <Modal open={isOpen} onClose={() => setIsOpen(false) }>
        Checklist is done, we love to see it
      </Modal>
   </div>
    
  const [content, setContent] = useState([contentData]);

  const [contentState, setContentState] = useState("");

  function changeState(key) {
    setContentState(key);
    console.log("hello", contentState);
  }

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
          content={contentData.filter(
            (content) => content.id === contentState + 1
          )}
        />
      </div>
    </div>

    </>

  );

}

export default App;
