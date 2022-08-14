import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Homepage() {
  const [pokemonlist, setPokemonlist] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((data) => setPokemonlist(data.data.results))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <h1>Header</h1>
      <ul>
        {pokemonlist.map((pokemon) => (
          <li key={pokemon.name}>
            <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
