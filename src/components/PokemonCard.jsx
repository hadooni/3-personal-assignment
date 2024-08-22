import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, onAdd, isSelected }) => {
  const navigate = useNavigate();
  const { id, img_url, korean_name } = pokemon;
  return (
    <StCard onClick={() => navigate(`/pokemon-detail?id=${id}`)}>
      <div>
        <img src={img_url} alt={`${korean_name} 이미지`} />
        <p>{korean_name}</p>
        <p>No. {id} </p>
      </div>
      {isSelected ? (
        <StButton
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        >
          추가
        </StButton>
      ) : (
        <StButton>삭제</StButton>
      )}
    </StCard>
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
