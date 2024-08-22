import React from "react";
import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemonList, onAddPokemon }) => {
  return (
    <StListContainer>
      {pokemonList.map((pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onAdd={() => {
              onAddPokemon(pokemon);
            }}
            isSelected="false"
          />
        );
      })}
    </StListContainer>
  );
};

export default PokemonList;

// styled components
const StListContainer = styled.div`
  background-color: #ffd177;
  width: 1000px;
  border-radius: 10px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px 10px;
  justify-items: center;
`;
