// import { contentData } from "../../pageContent";
// import List from "../List";
import styles from "./index.module.css";

const Display = ({ content, addChecklistItem }) => {
  
   return (
    <div className={styles.display}>
      {content.map((item) => (
        <div className="displayText" key={item.id}>
          <h1 className="heading"> {item.header}</h1>
            {item.sections.map((section) => (
            <div key={section.key}>
              <h2 className="subheading">{section.subheading}</h2>
              <p> {section.textContent}</p>
              <p> {section.image}</p>
              <ul>{section.checklist.map((checklistItem) => (
                  <li className="checklist-item-content"key={checklistItem.key} onClick={() => addChecklistItem(item.id, section.key, checklistItem.key)}>
                    {checklistItem.text}</li>))}</ul>
            </div>))}
        </div>))}
     </div>);
};

export default Display;
