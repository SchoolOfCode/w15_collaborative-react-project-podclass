import React from "react";
import {useState} from "react";

function Checklist ({items}) {
const [checklistLiClass, setChecklistLiClass] = useState("checklist-item");

    function changeChecklistLiClass() {
        console.log("what the fuck");
        (checklistLiClass === "checklist-item") ?  
                setChecklistLiClass("checklist-item-done") :          
                setChecklistLiClass("checklist-item")
      }
            
    return (   
        <ul>
        {items.map((item) => (<li className={checklistLiClass} key={item.key} onClick={changeChecklistLiClass}> <button className="podlist-button" >+/- PodList</button>
        {item.text}
        </li>))}
        {console.log("checklist class ", {checklistLiClass}) }
        </ul>
    )
} 

export default Checklist
