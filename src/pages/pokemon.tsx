import React, { useState } from 'react';
import PokemonType from '../Components/pokemonType.tsx';
import PokemonDesc from '../Components/pokemonDesc.tsx';

function Pokemon(props: { pokemon: any; }) {
    const [pokemon] = useState(props.pokemon);

    if (pokemon !== undefined) {
        return (
            <div className='pokemon-card m-4 bg-light rounded'>
                <PokemonDesc pokemon={props.pokemon} isPokedex={false} />
                <PokemonType types={pokemon.types}/>
            </div>
        );
    }
  }

  export default Pokemon;