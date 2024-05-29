import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/PokemonCard";
function App() {
  const [count, setCount] = useState(0);
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
  return (
    <>
      <div>
        {PokemonInfo.map((item, index) => (
          <Card
            key={index}
            img={item.img}
            id={index + 1}
            name={item.name}
            element1={item.element1}
            element2={item.element2}
          />
        ))}
      </div>
    </>
  );
}

export default App;
