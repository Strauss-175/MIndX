import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/PokemonCard";
import { BasePokemonInfo } from "./data/data";
function App() {
  const [pokemons, setPokemon] = useState(BasePokemonInfo)
  return (
    <>
      <div>
        {pokemons.map((item, index) => {
          return (
            <Card
              key={index}
              img={item.img}
              index={index + 1}
              name={item.name}
              element1={item.element1}
              element2={item.element2}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
