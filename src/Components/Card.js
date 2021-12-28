import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Colors } from "../constants";
import CardImage from "./CardImage";

function Card({ name, index }) {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        if (!response.ok) {
          throw new Error(`Http status ${response.status}`);
        }
        const data = await response.json();
        // console.log(data.types[0].type.name);
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, [name]);

  return (
    <Container>
      <RightSide
        backgroundColor={
          pokemon.types ? Colors[pokemon.types[0].type.name] : "white"
        }
      >
        <CardImage
          url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
            index + 1
          }.png`}
        />
      </RightSide>
      <CardTitle>{name}</CardTitle>

      <CardTypeContainer
        backgroundColor={
          pokemon.types ? Colors[pokemon.types[0].type.name] : "white"
        }
      >
        <CardType>{pokemon.types[0].type.name}</CardType>
      </CardTypeContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 351px;
  height: 136px;
  background: #f6f7f9;
  border-radius: 8px;
  filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
  position: relative;
  overflow: hidden;
`;

const RightSide = styled.div`
  background: ${(props) => props.backgroundColor};
  height: 100%;
  width: 65%;
  position: absolute;
  right: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2px;
`;

const CardTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #212121;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;
const CardType = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #212121;
`;

const CardTypeContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  width: fit-content;
  padding: 3px 5px;
`;

export default Card;
