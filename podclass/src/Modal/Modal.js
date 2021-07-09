import React from 'react';
import ReactDom from 'react-dom';


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
    top: 100,
    left: 100,
    right: 100,
    bottom: 100,
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
        <button className="close-button" onClick={onClose}>Close</button>
            {children}
        <p>some text here</p>

        </div>
        </>,
        document.getElementById('portal')
    )
 }
 