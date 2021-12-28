import styled from "@emotion/styled";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import Title from "../Components/Title";
import { useFetchData } from "../Hooks/fetchHook";

function Home() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=50";
  const { data, loading, error } = useFetchData(BASE_URL);
  if (loading) return "Loading . . .";
  if (error) return `Error ${error}`;
  return (
    <HomeContainer>
      <Nav />
      <Title />
      <CardsContainer>
        {data.map((element, index) => (
          <Card index={index} name={element.name} key={element.name} />
        ))}
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
  padding: 10px;
  margin: 0 5%;
  background: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-flow: wrap;
`;

export default Home;
