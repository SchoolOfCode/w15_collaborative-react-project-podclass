import React from "react";
import ReactDom from "react-dom";

const modalStyles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "4fff",
  padding: "50px",
  zIndex: 1000,
};

const overlayStyle = {
  position: "fixed",
  top: 120,
  left: 100,
  right: 100,
  bottom: 120,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
  border: "4.5px solid #deffff",
  boxShadow: "0 0 15px #ff5e00, 0 0 10px #ff4800, inset 0 0 15px #ff5e00",
  // boxShadow: "0 0 20px #00ffff, 0 0 15px #00d9ff, inset 0 0 15px #00ffff",
  borderRadius: "8px",
  backdropFilter: "blur(10px)",
};

export default function Modal({ open, children, onClose, selectedItems }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div style={overlayStyle} />
      <div style={modalStyles}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {children}
        <p>some text here</p>
      </div>
    </>,
    document.getElementById("portal")
  );
}
