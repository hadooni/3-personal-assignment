import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";

const Dex = () => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  return (
    <>
      <Dashboard />
      <PokemonList pokemonList={MOCK_DATA} />
    </>
  );
};

export default Dex;
