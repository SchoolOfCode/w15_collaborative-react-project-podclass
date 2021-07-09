import React from "react";
import { useState } from "react";
import "./App.css";
import { contentData, titles } from "./pageContent";
import Button from "../src/components/Button";
import Heading1 from "../src/components/h1";
// import Main from "../src/components/Main";
import Display from "./components/Display";
// import List from "./components/List";
import Modal from "./Modal/Modal";
import Checklist from "../src/components/Checklist";
import Api from "../src/components/API";

function App() {
  // const buttonWrapperStyles = {
  //   position: 'relative',
  //   zIndex: 1,
  // }

  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = useState(contentData);
  const [contentState, setContentState] = useState("");
  // const listItem = ["item 1", "item 2", "item 3"];
  const [buttonClass, setButtonClass] = useState("nav-button");
  // const [checklist, setChecklist] = useState([]);
  // const [checklistItemStatus, setChecklistItemStatus] = useState ("display-list-item")

  const selectedItems = content.reduce((acc, item) => {
    item.sections.forEach((section) => {
      section.checklist.forEach((checklistItem) => {
        console.log("checklist item ", checklistItem);
        if (checklistItem.selected) {
          acc.push(checklistItem);
        }
      });
    });
    return acc;
  }, []);

  console.log("this is the selected items array ", selectedItems);

  function handleChecklistItemClick(topicId, sectionId, checklistId) {
    console.log(topicId, sectionId, checklistId);
    setContent((content) => {
      const topicIndex = content.findIndex((topic) => topic.id === topicId);
      const topicToUpdate = content[topicIndex];
      const sectionIndex = topicToUpdate.sections.findIndex(
        (section) => section.key === sectionId
      );
      const sectionToUpdate = topicToUpdate.sections[sectionIndex];
      const checklistIndex = sectionToUpdate.checklist.findIndex(
        (checklistItem) => checklistItem.key === checklistId
      );
      const itemToUpdate = sectionToUpdate.checklist[checklistIndex];
      const updatedChecklistItem = {
        ...itemToUpdate,
        selected: !itemToUpdate.selected,
      };
      const updatedChecklist = [
        ...sectionToUpdate.checklist.slice(0, checklistIndex),
        updatedChecklistItem,
        ...sectionToUpdate.checklist.slice(checklistIndex + 1),
      ];
      const updatedSection = {
        ...sectionToUpdate,
        checklist: updatedChecklist,
      };
      const updatedSections = [
        ...topicToUpdate.sections.slice(0, sectionIndex),
        updatedSection,
        ...topicToUpdate.sections.slice(sectionIndex + 1),
      ];
      const updatedTopic = { ...topicToUpdate, sections: updatedSections };
      const checkUpdate = [
        ...content.slice(0, topicIndex),
        updatedTopic,
        ...content.slice(topicIndex + 1),
      ];
      console.log("checking the updated array ", checkUpdate);
      return checkUpdate;
    });
  }

  console.log("this is the class", buttonClass);

  function changeState(key) {
    setContentState(key);
    console.log("hello", contentState);
  }

  function changeButtonClass() {
    if (buttonClass === "nav-button") {
      setButtonClass("nav-button-clicked");
      console.log("class changed");
    }
  }

  return (
    <>
      <Api/>
      <div>
        {/* <button className={buttonClass} onClick={()=> {
        setIsOpen(true);
       }}>
        My PodList
      </button> */}

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Checklist is done, we love to see it
          <Checklist items={selectedItems} />
        </Modal>
      </div>

      <div id={"navigation"}>
        <div className="ButtonSeperator">
          {titles.map(
            (button) =>
              (button = (
                <Button
                  key={button}
                  buttonName={button}
                  identity={changeState}
                  identityNumber={titles.indexOf(`${button}`)}
                  className={buttonClass}
                  onClick={changeButtonClass}
                />
              ))
          )}
        </div>
        <button
          className={buttonClass}
          onClick={() => {
            setIsOpen(true);
          }}
        >
          My PodList
        </button>
        {/* 
        {titles.map(
          (heading) =>
            (heading = <Heading1 key={heading} mainHeading={heading} />)
        )} */}

        <div className="content">
          <Display
            addChecklistItem={handleChecklistItemClick}
            content={content.filter(
              (content) => content.id === contentState + 1
            )}
          />
        </div>
      </div>
      <div>
        <Checklist items={selectedItems} />
      </div>
    </>
  );
}

export default App;
