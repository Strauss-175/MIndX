import React, { useState } from "react";
import "./PokemonCard.css";
import Modal from "./Modal/Modal";
const Card = ({ name, index, element1, element2, img }) => {
  // D  A  T  A    C  O  N  T  R  O  L
  let [newName, setName] = useState(name);
  const dataName = () => {
    setName(nameInput);
  };
  let [newStatus, setStatus] = useState(false);
  const dataStatus = () => {
    setStatus(newStatus ? false : true);
  };
  return (
    <main>
      <section onClick={dataStatus}>
        <img src={img} />
        <p># {index}</p>
        <h1>{newName}</h1>
        <div className="elements">
          <h4
            className="Element1"
            // C  O  L  O  R    C  O  N  T  R  O  L
            style={
              element1 === "Grass"
                ? { backgroundColor: "green" }
                : element1 === "Fire"
                ? { backgroundColor: "red", color: "white" }
                : element1 === "Water"
                ? { backgroundColor: "#4592c4", color: "white" }
                : element1 === "Bug"
                ? { backgroundColor: "#709D3F", color: "white" }
                : { backgroundColor: "none" }
            }
          >
            {element1}
          </h4>
          <h4
            className="Element2"
            // C  O  L  O  R    C  O  N  T  R  O  L
            style={
              element2 === "Poison"
                ? { backgroundColor: "#b97fc9", color: "white" }
                : element2 === "Flying"
                ? {
                    background: "rgb(61,199,239)",
                    background:
                      "linear-gradient(180deg, rgba(61,199,239,1) 50%, rgba(190,185,185,1) 50%)",
                  }
                : { backgroundColor: "none" }
            }
          >
            {element2}
          </h4>
        </div>
      </section>
      {newStatus && (
        <Modal
          name={name}
          newName={newName}
          element1={element1}
          element2={element2}
          dataStatus={dataStatus}
          // dataName={dataName}
        />
      )}
    </main>
  );
};

export default Card;
