import { contentData } from "../../pageContent";
import List from "../List";
import styles from "./index.module.css";

const Display = ({ content, addChecklistItem }) => {
  return (
    <div className={styles.display}>
      {content.map((item) => (
        <div className="displayText" key={item.id}>
          <h1> {item.header}</h1>
          {item.sections.map((section) => (
            <div key={section.key}>
              <h2>{section.subheading}</h2>
              <p> {section.textContent}</p>
              <p> {section.image}</p>
              {/* add a ul, add a list and map over sections.checklist array to add list items*/}
              <ul>
                {section.checklist.map((checklistItem) => (
                  <li
                    className="checklist-item"
                    key={checklistItem.key}
                    onClick={() =>
                      addChecklistItem(item.id, section.key, checklistItem.key)
                    }
                  >
                    {checklistItem.text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {/* 
          <h2>{item.sectionsubheadings[0]}</h2>
          <p>{item.textContent[0]}</p>
          <h2>{item.subheadings[1]}</h2>
          <p>{item.textContent[1]}</p>
          <h2>{item.subheadings[2]}</h2>
          <p>{item.textContent[2]}</p>
          <h2>{item.subheadings[3]}</h2>
          <p>{item.textContent[3]}</p>
          <h2>{item.subheadings[4]}</h2>
          <p>{item.textContent[4]}</p>
           */}
          {/* {item.lists.map((item) => {
            return <List listItem={item} />;
          })} */}
        </div>
      ))}
      {/* {ListArray.map((item) => {
        return <List listItem={item} />;
      })} */}
    </div>
  );
};

export default Display;
