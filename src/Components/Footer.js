import styled from "@emotion/styled";

function Footer({ leftText, rightText }) {
  return (
    <StyledFooter>
      <p>{leftText}</p>
      <p>{rightText}</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  font-size: 18px;
  padding: 10px 13%;
  @media (max-width: 414px) {
    padding: 10px 7%;
  }
`;

export default Footer;
