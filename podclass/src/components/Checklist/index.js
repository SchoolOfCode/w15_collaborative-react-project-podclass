import React from "react";
import {useState} from "react";

function Checklist ({items, handleCompleted, className, index}) {

    const [toggleState, setToggleState] = useState ();
    
    return (   
        <li className={toggleState ? "checklist-item-done" : "checklist-item"}>
        <label className="switch">
        <input className="input" type="checkbox" onChange = {() => {
            if (toggleState) {handleCompleted(index)}
            setToggleState(!toggleState)}}
        /><span className="slider"> </span>
        </label>
        {`       ${items.text}`} 
        </li>
        )
        
    } 
    
    export default Checklist
    