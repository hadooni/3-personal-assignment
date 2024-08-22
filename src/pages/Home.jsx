import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();
  return (
    <StyleCt>
      <StyleImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
      <StyleButton onClick={() => navigate("/dex")}>
        포켓몬 도감 시작하기
      </StyleButton>
    </StyleCt>
  );
};

export default Home;

// styled components
const StyleButton = styled.button`
  background-color: #ca2727;
  color: white;
  border: none;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  padding: 10px 10px;
  cursor: pointer;
`;

const StyleImg = styled.img`
  width: 500px;
  height: 180px;
`;

const StyleCt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
