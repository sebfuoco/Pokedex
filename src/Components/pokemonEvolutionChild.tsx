import React,{ useState, useEffect } from 'react';
import PokemonType from './pokemonType.tsx';

function PokemonEvolutionChild(props) {
  const [pokemon] = useState(props.pokemon);
  const [pokemonId, setPokemonId] = useState(null);

  useEffect(() => {
    setPokemonId(('000' + pokemon.id).slice(-4));
  }, [pokemon.id]);

  return (
    pokemon !== undefined &&
    <>
      <h4>{pokemon.name}</h4>
      <p>#{pokemonId}</p>
      <img className="pokedexChild" src={pokemon.pokedexImg} alt={pokemonId}/>
      <PokemonType types={pokemon.types}/>
    </>
  );
}

export default PokemonEvolutionChild;