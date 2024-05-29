import React from "react";
import "./PokemonCard.css";

const PokemonInfo = [
  {
    name: "Bulbasaur",
    img: "/pics/001.png",
    element1: "Grass",
    element2: "Poison",
  },
  {
    name: "Ivysaur",
    img: "/pics/002.png",
    element1: "Grass",
    element2: "Poison",
  },
  {
    name: "Venusaur",
    img: "/pics/003.png",
    element1: "Grass",
    element2: "Poison",
  },
  {
    name: "Charmander",
    img: "/pics/004.png",
    element1: "Fire",
  },
  {
    name: "Charmeleon",
    img: "/pics/005.png",
    element1: "Fire",
  },
  {
    name: "Charizard",
    img: "/pics/006.png",
    element1: "Fire",
    element2: "Flying",
  },
  {
    name: "Squirtle",
    img: "/pics/007.png",
    element1: "Water",
  },
  {
    name: "Wartortle",
    img: "/pics/008.png",
    element1: "Water",
  },
  {
    name: "Blastoise",
    img: "/pics/009.png",
    element1: "Water",
  },
  {
    name: "Caterpie",
    img: "/pics/010.png",
    element1: "Bug",
  },
  {
    name: "Metapod",
    img: "/pics/011.png",
    element1: "Bug",
  },
  {
    name: "Butterfree",
    img: "/pics/012.png",
    element1: "Bug",
    element2: "Flying",
  },
];
const Card = () => (
  <main>
    {PokemonInfo.map((item, index) => (
        <section className="Test" onClick={() => alert(item)}>
          <img src={item.img} alt="" />
          <p># {index + 1}</p>
          <h1>{item.name}</h1>
          <div className="elements">
            <h4
              className="Element1"
              // C  O  L  O  R    C  O  N  T  R  O  L
              style={
                item.element1 === "Grass"
                  ? { backgroundColor: "green" }
                  : item.element1 === "Fire"
                  ? { backgroundColor: "red", color: "white" }
                  : item.element1 === "Water"
                  ? { backgroundColor: "#4592c4", color: "white" }
                  : item.element1 === "Bug"
                  ? { backgroundColor: "#709D3F", color: "white" }
                  : { backgroundColor: "none" }
              }
            >
              {item.element1}
            </h4>
            <h4
              className="Element2"
              // C  O  L  O  R    C  O  N  T  R  O  L
              style={
                item.element2 === "Poison"
                  ? { backgroundColor: "#b97fc9", color: "white" }
                  : item.element2 === "Flying"
                  ? {
                      background: "rgb(61,199,239)",
                      background:
                        "linear-gradient(180deg, rgba(61,199,239,1) 50%, rgba(190,185,185,1) 50%)",
                    }
                  : { backgroundColor: "none" }
              }
            >
              {item.element2}
            </h4>
          </div>
        </section>
    ))}
  </main>
);

export default Card;
