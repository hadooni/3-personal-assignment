import styled from "styled-components";

const StyledDashboardCt = styled.div`
  display: flex;
  justify-content: center;
  width: 1040px;
  height: 200px;
  background-color: #ffe86e;
  border-radius: 10px;
  margin: 10px auto 20px auto;
`;

const Dashboard = () => {
  return (
    <StyledDashboardCt>
      <h2>나만의 포켓몬</h2>
    </StyledDashboardCt>
  );
};

export default Dashboard;
