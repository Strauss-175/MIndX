import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ name, element1, element2, index, status, dataName }) => {
  return (
    <main className="modal">
      <div className="body">
        <div className="background" onClick={status}></div>
        <form action="" className="modal-content">
          <h1>{name}</h1>
          <input
            type="text"
            id={index}
            className="input"
            placeholder="Change name to.."
          />
          <button
            onClick={() => {
              dataName();
              status();
            }}
          >
            <span>Button</span>
          </button>
        </form>
      </div>
    </main>
  );
};

export default Modal;
