import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import LoadingPage from "./LoadingPage";

export default function PokemonSection() {
  let { pokemonid } = useParams();
  const [pokemonDetail, setPokemonDetail] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonid}`)
      .then((data) => {
        setPokemonDetail(data.data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [pokemonid]);

  if (loading) {
    return <LoadingPage />;
  }

  console.log(typeof pokemonDetail);

  return (
    <div>
      {pokemonDetail ? (
        <Card
          name={pokemonDetail.name}
          img={pokemonDetail.sprites.other["dream_world"]["front_default"]}
          type={pokemonDetail.types[0].type.name}
          weight={pokemonDetail.weight}
          base_experience={pokemonDetail["base_experience"]}
          abilities={pokemonDetail.abilities.map((ability) => (
            <li>{ability.ability.name}</li>
          ))}
        />
      ) : null}
    </div>
  );
}

// <h2>{pokemonid}</h2>
//<h1>{pokemonDetail.name}</h1>
