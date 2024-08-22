import React from "react";
import MOCK_DATA from "../mock";
import { useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const pokemonId = params.get("id");
  const pokemon = MOCK_DATA.find((p) => p.id === +pokemonId);

  return (
    <StDetailContainer>
      <StImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <StH2>{pokemon.korean_name}</StH2>
      <p>타입: {pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <StButton onClick={() => navigate("/dex")}>뒤로 가기</StButton>
    </StDetailContainer>
  );
};

export default PokemonDetail;

// styled components
const StDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StImg = styled.img`
  width: 200px;
  height: 200px;
`;

const StH2 = styled.h2`
  color: red;
`;

const StButton = styled.button`
  background-color: black;
  border: none;
  border-radius: 8px;
  color: white;
  width: 100px;
  height: 40px;
  font-size: 15px;
  margin-top: 20px;
  cursor: pointer;
`;
