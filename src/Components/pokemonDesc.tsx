import { useState, useEffect } from 'react';
import { Pokemon } from '../Interfaces/PokemonInterface';

function PokemonDesc(props: { pokemon: Pokemon; isPokedex: boolean; }) {
  const [pokemon] = useState<Pokemon>(props.pokemon);
  const [pokemonId, setPokemonId] = useState<string>("");
  const [isPokedex] = useState<boolean>(props.isPokedex);

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