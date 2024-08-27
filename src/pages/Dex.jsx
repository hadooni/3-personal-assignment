import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

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
    const samePokemon = selectedPokemon.find(
      (addedPk) => addedPk.id === pokemon.id
    );

    let updated = false; // 교체 여부를 추적하기 위한 변수

    const updatedPokemon = selectedPokemon.map((item) => {
      if (item.id >= 10000 && !updated) {
        updated = true; // 첫 번째 교체가 발생하면 이후에는 교체하지 않도록 설정
        return {
          id: pokemon.id,
          img: pokemon.img_url,
          name: pokemon.korean_name,
          number: `No. ${pokemon.id}`,
          isSelected: true,
        };
      }
      return item; // 다른 요소는 그대로 유지
    });

    if (samePokemon) {
      alert("이미 선택된 포켓몬 입니다!");
    } else if (selectedPokemon.length >= 6 && !updated) {
      alert("더이상 포켓몬을 추가할 수 없습니다!");
    } else {
      setSelectedPokemon(updatedPokemon);
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
      <Dashboard />
      <PokemonList />
    </>
  );
};

export default Dex;
