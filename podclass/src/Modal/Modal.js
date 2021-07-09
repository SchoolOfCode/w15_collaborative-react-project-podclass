import React from 'react';
import ReactDom from 'react-dom';

import Checklist from '../components/Checklist';

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
    zIndex: 1000,
    backdropFilter: 'blur(10px)'
}


export default function Modal({open, children, onClose, selectedItems}){
    console.log({open, children, onClose});
 
  if (!open) return null

    return ReactDom.createPortal(
        <>
        <div style={overlayStyle}/>
        <div style={modalStyles}>
        <button onClick={onClose}>Close</button>
            {children}
        <p>some text here</p>
{/*   checklist component to be rendered here */}
        {/* <Checklist items = {selectedItems}/> */}
        </div>
        </>,
        document.getElementById('portal')
    )
 }
 