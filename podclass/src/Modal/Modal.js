import React from 'react';
import ReactDom from 'react-dom';
import List from "../components/List"
import { contentData } from '../../src/pageContent';
import Display from '../components/Display';
import Checklist from '../components/Checklist';
import useState from "react";

const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '4fff',
    padding: '50px',
    zIndex: 1000
}

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex: 1000
}


export default function Modal({open, children, onClose}){
    
//  const [checklistItemStatus, setChecklistItemStatus] = useState ("displayList") 
  if (!open) return null

    // function checklistItemDone ({checklistItemStatus}) {
    //     if ({checklistItemStatus} !== "displayListItem") {
    //     setChecklistItemStatus("completedListItem");
    //     console.log (checklistItemStatus)};
    //     }

    return ReactDom.createPortal(
        <>
        <div style={overlayStyle}/>
        <div style={modalStyles}>
        <button onClick={onClose}>Close</button>
            {children}
        <p>some text here</p>
        <Checklist 
        // onClick={checklistItemDone} className={checklistItemStatus}
        />
        </div>
        </>,
        document.getElementById('portal')
    )
 }
 