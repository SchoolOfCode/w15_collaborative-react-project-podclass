import React from "react";
// import {useState} from "react";
import "./App.css";
import { titles } from "./pageContent";
import Button from "../src/components/Button";
import Heading1 from "./components/h1";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    /* contentData.map((contentData) => {
      <p key={`${contentData.id}`}>{contentData.header} </p>}); */
    <div>
      {titles.map(
        (button) => (button = <Button key={button} buttonName={button} />)
      )}
      ;
      {titles.map(
        (heading) => (heading = <h1 key={heading} mainHeading={heading} />)
      )}
      ;
    </div>
  );
}

export default App;
