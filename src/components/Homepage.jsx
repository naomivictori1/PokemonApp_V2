import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function Homepage() {
  const [pokemonlist, setPokemonlist] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pokemonPerPage] = useState(50);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1279")
      .then((data) => setPokemonlist(data.data.results))
      .catch((e) => console.log(e));
  }, []);

  const indexOfLastPokemon = currentPageNumber * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = pokemonlist.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);
  const linkStyle = {
    color: "#053B50",
    textDecoration: "none",
    width: "300px",
    backgroundColor: "#FFCC70",
    borderRadius: "2rem",
    boxShadow: "0 5px 5px rgba(0, 0, 0, 0.5)",
    padding: "0 1.5rem",
    // display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    textAlign: "center",
  };

  return (
    <>
      <ul className="pokelist">
        {currentPokemon.map(
          (pokemon) => (
            console.log(pokemon.name),
            (
              <h2 key={pokemon.name}>
                <Link style={linkStyle} to={`/pokemon/${pokemon.name}`}>
                  {pokemon.name}
                </Link>
              </h2>
            )
          )
        )}
      </ul>
      <Pagination
        postsPerPage={pokemonPerPage}
        totalPosts={pokemonlist.length}
        paginate={paginate}
      />
    </>
  );
}
