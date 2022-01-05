import styled from "@emotion/styled";
import { Colors } from "../constants";
import CardImage from "./CardImage";

function Card({ name, types, id, stats }) {
  return (
    <Container>
      <RightSide backgroundColor={Colors[types[0].type.name] ?? "white"}>
        {id ? (
          <CardImage
            url={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          />
        ) : null}
      </RightSide>
      <CardTitle>{name}</CardTitle>
      <StatsContainer>
        <Stat>
          <StatCircle>{stats[1].base_stat ?? "Unknown"}</StatCircle>
          <StatName>Attack</StatName>
        </Stat>
        <Stat>
          <StatCircle>{stats[2].base_stat ?? "Unknown"}</StatCircle>
          <StatName>Defense</StatName>
        </Stat>
      </StatsContainer>
      <CardTypeContainer
        backgroundColor={Colors[types[0].type.name] ?? "white"}
      >
        <CardType>{types[0].type.name ?? "Unknown"}</CardType>
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
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
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
  text-transform: capitalize;
  font-weight: bold;
  font-size: 1.125em;
  line-height: 21px;
  color: #212121;
  text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`;
const CardType = styled.p`
  text-transform: capitalize;
  font-family: Roboto;
  font-size: 0.75em;
  line-height: 14px;
  text-align: center;
  color: #212121;
`;

const CardTypeContainer = styled.div`
  background: ${(props) => props.backgroundColor};
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  width: fit-content;
  padding: 4px 8px;
`;

const StatsContainer = styled.div`
  width: 90px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Stat = styled.div`
  width: 38px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StatCircle = styled.div`
  width: 38px;
  height: 38px;
  border: 3px solid #212121;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;

const StatName = styled.p`
  font-family: Karla;
  font-size: 0.75em;
  line-height: 14px;
  text-align: center;
  color: #4b4b4b;
`;

export default Card;
