import React from "react";
import {useState} from "react";

function Checklist ({items, handleCompleted, className, index}) {

    const [toggleState, setToggleState] = useState ();

    console.log ("this is the toggleState", toggleState);
    return (   
        <li className={toggleState ? "checklist-item-done" : "checklist-item"}>
        <div class="switch">
        <span class="slider">
        <input type="checkbox" onChange = {() => {
            if (toggleState) {handleCompleted(index)}
            setToggleState(!toggleState)}}
        /> </span>
        </div>
        {items.text} 
        </li>
        )
        
    } 
    
    export default Checklist
    
    // {items.map((item) => (<li className={checklistLiClass} key={item.key} onClick={changeChecklistLiClass}> 
    // make this a toggle, use a ternary statement here to check state and set class
    // may need to hook a state to toggle status
    // "podlist-button" onClick={()=>handleCompleted(index)}