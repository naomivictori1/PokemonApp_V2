import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';

export default function Homepage() {
	const [pokemonlist, setPokemonlist] = useState([]);
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [pokemonPerPage] = useState(100);

	useEffect(() => {
		axios
			.get('https://pokeapi.co/api/v2/pokemon?limit=1279')
			.then((data) => setPokemonlist(data.data.results))
			.catch((e) => console.log(e));
	}, []);

	const indexOfLastPokemon = currentPageNumber * pokemonPerPage;
	const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
	const currentPokemon = pokemonlist.slice(
		indexOfFirstPokemon,
		indexOfLastPokemon,
	);

	const paginate = (pageNumber) => setCurrentPageNumber(pageNumber);
	return (
		<>
			<ul className="pokelist">
				{currentPokemon.map((pokemon) => (
					<h2 key={pokemon.name}>
						<Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
					</h2>
				))}
			</ul>
			<Pagination
				postsPerPage={pokemonPerPage}
				totalPosts={pokemonlist.length}
				paginate={paginate}
			/>
		</>
	);
}
