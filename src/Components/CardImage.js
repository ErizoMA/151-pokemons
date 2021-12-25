import styled from "@emotion/styled";

function CardImage({ url }) {
  return <Image src={url}></Image>;
}

const Image = styled.img`
  height: 100%;
`;

export default CardImage;
