import React from "react";
// import {useState} from "react";
import './App.css';
import {titles} from "./pageContent";
import Button from "../src/components/Button";
import Heading1 from "../src/components/h1";
import Content from "./components/Content";

function App() {
  return (
    /* contentData.map((contentData) => {
      <p key={`${contentData.id}`}>{contentData.header} </p>}); */
    <div>
    {titles.map(
        (button) => (button = <Button key={button} buttonName={button} />)
      )}
      {titles.map(
        (heading) => (heading = <Heading1 key={heading} mainHeading={heading} />)
      )}
    <Content/>
    </div>
  )
}

export default App;
