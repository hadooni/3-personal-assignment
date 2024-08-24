import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../pages/Dex";

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext);
  const navigate = useNavigate();
  return (
    <StDashboardContainer>
      <h2>My Pokemon</h2>
      <StPokemonContainer>
        {selectedPokemon.map((pokemon) => {
          return (
            <StCard
              key={pokemon.id}
              onClick={() => navigate(`/pokemon-detail?id=${pokemon.id}`)}
            >
              <img src={pokemon.img} alt={`${pokemon.name} 이미지`} />
              <p>{pokemon.name}</p>
              <p>{pokemon.number}</p>
              {pokemon.isSelected ? (
                <StButton
                  onClick={(e) => {
                    e.stopPropagation();
                    removePokemon(pokemon);
                  }}
                >
                  삭제
                </StButton>
              ) : (
                <StButton>추가</StButton>
              )}
            </StCard>
          );
        })}
      </StPokemonContainer>
    </StDashboardContainer>
  );
};

export default Dashboard;

// styled components
const StDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 1040px;
  height: 330px;
  background-color: #ffe86e;
  border-radius: 10px;
  margin: 10px auto 20px auto;
  padding-top: 10px;
`;

const StPokemonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 20px;
  gap: 0 50px;
`;

const StCard = styled.div`
  background-color: white;
  width: 120px;
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
`;
