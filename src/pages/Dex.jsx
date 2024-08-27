import { createContext, useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

export const PokemonContext = createContext();

const Dex = () => {
  const defaultCard = () => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push({
        img_url:
          "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png",
        korean_name: "",
        types: [],
        id: 10000 + i,
        description: "",
      });
    }
    return arr;
  };

  const [selectedPokemon, setSelectedPokemon] = useState(defaultCard());

  const addPokemon = (pokemon) => {
    const addedPokemon = [
      ...selectedPokemon,
      {
        id: pokemon.id,
        img: pokemon.img_url,
        name: pokemon.korean_name,
        number: `No. ${pokemon.id}`,
        isSelected: true,
      },
    ];
    const samePokemon = selectedPokemon.find(
      (addedPk) => addedPk.id === pokemon.id
    );
    const test = selectedPokemon.map((item) => {
      if (item.id >= 10000) {
        return {
          id: pokemon.id,
          img: pokemon.img_url,
          name: pokemon.korean_name,
          number: `No. ${pokemon.id}`,
          isSelected: true,
        };
      }
    });
    console.log(test);

    if (selectedPokemon.length >= 6) {
      alert("더이상 포켓몬을 추가할 수 없습니다!");
    } else if (samePokemon) {
      alert("이미 선택된 포켓몬 입니다!");
    } else {
      setSelectedPokemon(addedPokemon);
    }
  };

  const removePokemon = (pokemon) => {
    const removedPokemon = selectedPokemon.filter((select) =>
      select.id === pokemon.id ? false : true
    );
    setSelectedPokemon(removedPokemon);
  };

  return (
    <>
      <PokemonContext.Provider
        value={{ selectedPokemon, removePokemon, addPokemon, MOCK_DATA }}
      >
        <Dashboard />
        <PokemonList />
      </PokemonContext.Provider>
    </>
  );
};

export default Dex;
