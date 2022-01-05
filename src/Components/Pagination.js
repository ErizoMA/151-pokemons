import styled from "@emotion/styled";

function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPokemons / pokemonsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length !== 11) return <p>Loading...</p>;
  return (
    <Ul>
      {pageNumbers.map((number) => (
        <Li key={number}>
          <A
            onClick={() => {
              paginate(number);
            }}
            href="#"
          >
            {number}
          </A>
        </Li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 1rem;
  border-radius: 0.6rem;
  box-shadow: 0 0.8rem 2rem rgba(#5a6181, 0.05);
  gap: 0.5%;
`;

const Li = styled.li`
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 0.4rem;
  display: grid;
  place-items: center;
`;

const A = styled.a`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.125em;
  line-height: 21px;
  color: #212121;
  text-shadow: 4px 4px 4px rgb(33 33 33 / 10%);
  :active {
    color: red;
  }
`;

export default Pagination;
