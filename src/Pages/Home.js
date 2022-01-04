import styled from "@emotion/styled";
import { useState } from "react";
import Card from "../Components/Card";
import Nav from "../Components/Nav";
import Pagination from "../Components/Pagination";
import Title from "../Components/Title";
import { useFetchData } from "../Hooks/fetchHook";

function Home() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";
  const { data, loading, error } = useFetchData(BASE_URL);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(15);

  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = data.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  if (loading) return "Loading . . .";
  if (error) return `Error ${error}`;

  return (
    <HomeContainer>
      <Nav />
      <Title />
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={data.length}
        paginate={paginate}
      />
      <CardsContainer>
        {currentPokemons.map((element, index) => (
          <Card name={element.name} key={element.name} />
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-flow: wrap;
`;

export default Home;
