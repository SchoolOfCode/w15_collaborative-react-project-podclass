import React from "react";

function Checklist ({items}) {
// console.log ("this is items from checklist component ",)
        return (         
        <ul>
        {items.map((item) => (<li className="checklist-item-done" key={item.key}> <button className="podlist-button">+/- PodList</button>{item.text}</li>))}    
        </ul>
    )
}

export default Checklist