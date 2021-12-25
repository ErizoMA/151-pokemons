import styled from "@emotion/styled";
import CardImage from "./CardImage";

function Card() {
  return (
    <Container>
      <RightSide>
        <CardImage url="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/23.png" />
      </RightSide>
      <CardTitle>Pachi</CardTitle>

      <CardTypeContainer>
        <CardType>Electric</CardType>
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
  background: linear-gradient(180deg, #f2cb07 0%, #f2c307 41.15%, #f2b807 100%);
  height: 100%;
  width: 65%;
  position: absolute;
  right: 0;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: #f2cb07;
  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
  border-radius: 11px;
  width: fit-content;
  padding: 3px 5px;
`;

export default Card;
