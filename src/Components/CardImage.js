import styled from "@emotion/styled";

function CardImage({ url }) {
  return <Image src={url}></Image>;
}

const Image = styled.img`
  height: 100%;
  /* width: 90%; */
`;

export default CardImage;
