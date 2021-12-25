import styled from "@emotion/styled";
import Card from "../Components/Card";

import Nav from "../Components/Nav";
import Title from "../Components/Title";

function Home() {
  return (
    <HomeContainer>
      <Nav />
      <Title />
      <CardsContainer>
        <Card />
        <Card />
      </CardsContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CardsContainer = styled.div`
  background: red;
  display: grid;
  place-items: center;
  row-gap: 10px;
`;

export default Home;
