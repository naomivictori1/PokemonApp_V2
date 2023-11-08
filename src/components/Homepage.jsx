import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

export default function Homepage() {
  const [pokemonlist, setPokemonlist] = useState([]);
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [pokemonPerPage] = useState(50);
  const [filterData, setFilterData] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1279")
      .then((data) => setPokemonlist(data.data.results))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    const filteredResults = pokemonlist.filter((pokemon) =>
      pokemon.name.includes(filterData)
    );

    setFilteredPokemon(filteredResults);
  }, [pokemonlist, filterData]);

  const indexOfLastPokemon = currentPageNumber * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(
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
    alignItems: "center",
    justifyContent: "space-between",
    boxSizing: "border-box",
    textAlign: "center",
  };

  const handleFilter = (value) => {
    setFilterData(value);
  };

  return (
    <>
      <div className="search-box">
        <button className="btn-search">
          <i className="fas fa-search"></i>
        </button>
        <input
          placeholder="Search..."
          className="input-search"
          onChange={(e) => handleFilter(e.target.value)}
        />
      </div>

      <ul className="pokelist">
        {currentPokemon.map((pokemon) => (
          <h2 key={pokemon.name}>
            <Link style={linkStyle} to={`/pokemon/${pokemon.name}`}>
              {pokemon.name}
            </Link>
          </h2>
        ))}
      </ul>
      <Pagination
        postsPerPage={pokemonPerPage}
        totalPosts={filteredPokemon.length}
        paginate={paginate}
      />
    </>
  );
}
