import styled from "@emotion/styled";
import Logo from "./Logo";

function Nav() {
  return (
    <Container>
      <Logo />
    </Container>
  );
}
const Container = styled.div`
  height: 93px;
  display: grid;
  place-items: center;
  background: #f5db13;
  box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`;
export default Nav;
