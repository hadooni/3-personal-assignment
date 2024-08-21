import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  width: 130px;
  height: 200px;
  border: none;
  border-radius: 8px;
  text-align: center;
`;

const StyledButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
`;

const PokemonCard = ({ pokemon, onAdd, isSelected }) => {
  const { img_url, korean_name } = pokemon;
  return (
    <StyledCard>
      <img src={img_url} alt={`${korean_name} 이미지`} />
      <p>{korean_name}</p>
      {isSelected ? (
        <StyledButton>삭제</StyledButton>
      ) : (
        <StyledButton>추가</StyledButton>
      )}
    </StyledCard>
  );
};

export default PokemonCard;
