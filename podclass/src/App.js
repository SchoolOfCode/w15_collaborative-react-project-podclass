import React from "react";
// import {useState} from "react";
import './App.css';
import {buttonTitles, contentData} from "./pageContent";
import Button from "../src/components/Button";

function App() {
  console.log(contentData);
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
     {buttonTitles.map((button) => button = 
      <Button buttonName = {button}/>)};
    </div>
  );
}

export default App;
