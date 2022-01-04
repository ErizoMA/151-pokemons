function Pagination({ pokemonsPerPage, totalPokemons, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPokemons / pokemonsPerPage) + 1; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
