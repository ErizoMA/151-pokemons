import styled from "@emotion/styled";

function Title() {
  return (
    <P>
      150 <Span>Pokemons</Span> for you to choose your favorite
    </P>
  );
}

const P = styled.p`
  text-align: center;
  letter-spacing: 3px;
  font-weight: 400;
  font-size: 35px;
  margin: 0 5%;
`;
const Span = styled.span`
  font-weight: 700;
`;
export default Title;
