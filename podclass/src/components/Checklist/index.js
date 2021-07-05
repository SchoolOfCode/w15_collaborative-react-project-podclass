import React from "react";
import checklistItems from "../../pageContent";

function Checklist (checklistItems) {
    return (
        {checklistItems.map((item)=> (item = <li>{item}</li>))
    }
}

export default Checklist