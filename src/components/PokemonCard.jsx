import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../pages/Dex";

const PokemonCard = () => {
  const { MOCK_DATA, addPokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  let isSelected = true;
  return (
    <>
      {MOCK_DATA.map((pokemon) => {
        return (
          <StCard
            key={pokemon.id}
            onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}
          >
            <div>
              <img
                src={pokemon.img_url}
                alt={`${pokemon.korean_name} 이미지`}
              />
              <p>{pokemon.korean_name}</p>
              <p>No. {pokemon.id} </p>
            </div>
            {isSelected ? (
              <StButton
                onClick={(e) => {
                  e.stopPropagation();
                  addPokemon(pokemon);
                }}
              >
                추가
              </StButton>
            ) : (
              <StButton>삭제</StButton>
            )}
          </StCard>
        );
      })}
    </>
  );
};

export default PokemonCard;

// styled components
const StCard = styled.div`
  background-color: white;
  width: 130px;
  height: 220px;
  border: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
`;

const StButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
  &:hover {
    background-color: #ad0303;
  }
`;
