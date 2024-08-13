import React, { useState, useEffect } from 'react';

function PokemonDesc(props: { pokemon: any; isPokedex: boolean; }) {
  const [pokemon] = useState(props.pokemon);
  const [pokemonId, setPokemonId] = useState(null);
  const [isPokedex] = useState(props.isPokedex);

  useEffect(() => {
    setPokemonId(('000' + pokemon.id).slice(-4));
  }, [pokemon.id]);

  return (
    pokemon !== undefined &&
    <>
      <h4>{pokemon.name}</h4>
      <p>#{pokemonId}</p>
      {isPokedex ? 
        <>
          <img className="pokedexChild" src={pokemon.pokedexImg} alt={pokemonId}/>
          <div>{pokemon.description}</div>
        </>
        :
        <img className="pokemon" src={pokemon.img} alt={pokemonId}/>
      }
    </>
  );
}

export default PokemonDesc;