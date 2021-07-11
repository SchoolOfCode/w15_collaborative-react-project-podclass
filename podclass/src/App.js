import React from "react";
import { useState } from "react";
import "./App.css";
import { contentData, titles } from "./pageContent";
import Button from "../src/components/Button";
import Display from "./components/Display";
import Modal from "./Modal/Modal";
import Checklist from "../src/components/Checklist";
import Logo from "../src/Images/logoButton.png";
// import List from "./components/List";
// import Heading1 from "../src/components/h1";
// import Main from "../src/components/Main";
// import Api from "../src/components/API";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = useState(contentData);
  const [contentState, setContentState] = useState("0");
  const [buttonClass, setButtonClass] = useState("nav-button");
  const [completedChecklist, setCompletedChecklist] = useState([]);

  // This is the array of checklist items that have been selected by the user
  const selectedItems = content.reduce((acc, item) => {
    item.sections.forEach((section) => {
      section.checklist.forEach((checklistItem) => {
        if (checklistItem.selected) {
          acc.push(checklistItem);
        }
      });
    });
    return acc;
  }, []);

  // function to handle adding items for podlist display
  function handleChecklistItemClick(topicId, sectionId, checklistId) {
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
      return checkUpdate;
    });
  }

  function changeState(key) {
    setContentState(key);
    console.log("hello", contentState);
  }

  // change colors on buttons when clicked
  function changeButtonClass() {
    if (buttonClass === "nav-button") {
      setButtonClass("nav-button-clicked");
    }
  }

  function handleCompletedChecklist(i) {
    setCompletedChecklist([
      ...selectedItems.slice(0, i),
      (selectedItems[i].className = "checklist-item-done"),
      ...selectedItems.slice(i + 1),
    ]);
  }
  return (
    <>
      {/* <Api/> */}

      {/* Podlist/Checklist overlay */}
      <div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <h1>Your Podcast To-Do PodList</h1>
          <ul>
            {selectedItems.map((item, i) => (
              <Checklist
                items={selectedItems[i]}
                key={selectedItems[i].key}
                className={selectedItems[i].className="checklist-item-done" ? "checklist-item-done" : "checklist-item"}
                // className={selectedItems[i].className}
                handleCompleted={handleCompletedChecklist}
                index={i}
              />
            ))}
          </ul>
        </Modal>
      </div>

      {/* create page content buttons for nav bar  */}
      <div id={"navigation"}>
        <div className="ButtonSeperator">
          <img
            className="logo"
            src={Logo}
            alt="logo"
            width="320"
            height="320"
          ></img>
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

          {/* create button to display checklist */}
          <button
            className={`${buttonClass} break`}
            onClick={() => {
              setIsOpen(true);
            }}
          >
            My PodList
          </button>
        </div>

        {/* display content for each page */}
        <div className="content">
          <Display
            addChecklistItem={handleChecklistItemClick}
            content={content.filter((content) => content.id === contentState)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
