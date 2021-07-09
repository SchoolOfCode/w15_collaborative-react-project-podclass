import React from "react";

function Checklist({ items }) {
  // console.log ("this is items from checklist component ",)
  return (
    <ul>
      {items.map((item) => (
        <li key={item.key}>
          {item.text} <button>+/- PodList</button>
        </li>
      ))}
    </ul>
  );
}
//onclick of button strike it out
export default Checklist;
