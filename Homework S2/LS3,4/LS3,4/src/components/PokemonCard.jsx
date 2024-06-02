import React, { useState, useRef } from "react";
import "./PokemonCard.css";

const Card = ({ name, index, element1, element2, img }) => {
  // D  A  T  A    C  O  N  T  R  O  L
  let [newName, setName] = useState(name);
  const dataName = () => {
    setName(document.getElementById(index).value);
  };
  const refPoint = useRef();
  const test = document.activeElement;

  return (
    <section
      onClick={() => {
        document.getElementById(index).focus();
        console.log(test);
      }}
    >
      <img src={img} alt="" />
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
      <form
        action=""
        id="dataBox"
        style={{visibility: ""}}
      >
        Set new Name
        <input type="text" name="" id={index} ref={refPoint} />
        <input
          type="button"
          value="Submit"
          onClick={(i) => {
            dataName();

            console.log(document.getElementById(index).value);
          }}
        />
      </form>
    </section>
  );
};

export default Card;
