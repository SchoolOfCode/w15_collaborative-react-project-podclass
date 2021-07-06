import React from "react";
import { listItems } from "../../pageContent";
// import Modal from "../../Modal/Modal";
// import {checklistItems} from ;


function Checklist ({items}) {
console.log ("this is items from checklist component ", items)
        return (         
        <ul>
        {items.map((item) => (<li key={item.key}>{item.text}</li>))}    
        </ul>
    )
}

export default Checklist