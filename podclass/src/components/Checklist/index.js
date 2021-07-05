import React from "react";
// import Modal from "../../Modal/Modal";
// import {checklistItems} from ;


function Checklist ({onClick, className}) {

    const checklistItems = [
        "checklist item 1",
        "checklist item 2",
        "checklist item 3",
        "checklist item 4",
        "hello painty vik"
        ];

    return (
    checklistItems.map((item) => (item = <li onClick={onClick} >{item}</li>))    
    )
}

export default Checklist