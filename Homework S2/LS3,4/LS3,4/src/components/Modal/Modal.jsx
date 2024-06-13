import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ name, newName, dataStatus}) => {
  const [nameInput, setName] = useState();
  const handleNameChange = () => {
    newName = nameInput;
  };
  return (
    <main className="modal">
      <div className="body">
        <div className="background" onClick={dataStatus}></div>
        <form action="" className="modal-content">
          <h1>{name}</h1>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="input"
            placeholder="Change name to.."
          />
          <button
            onClick={() => {
              // e.preventDefault();
              handleNameChange();
              console.log(nameInput)
              console.log(newName)
              dataStatus();
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
