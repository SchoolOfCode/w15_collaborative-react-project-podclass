import React from "react";
// import {useState} from "react";
import './App.css';
import {titles} from "./pageContent";
import Button from "../src/components/Button";
import Heading1 from "../src/components/h1";

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
   
   <div>
    {titles.map(
        (button) => (button = <Button key={button} buttonName={button} />)
      )}
 
      {titles.map(
        (heading) => (heading = <Heading1 key={heading} mainHeading={heading} />)
      )}
    </div>
    </>
  )
}

export default App;
