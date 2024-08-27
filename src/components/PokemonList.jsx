import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = () => {
  return (
    <StListContainer>
      <PokemonCard />
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
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px 10px;
  justify-items: center;
`;
