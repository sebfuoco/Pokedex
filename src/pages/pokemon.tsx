import { useState } from 'react';
import PokemonType from '../Components/pokemonType.tsx';
import PokemonDesc from '../Components/pokemonDesc.tsx';
import { Pokemon } from '../Interfaces/PokemonInterface.ts';

function PokemonPage(props: { pokemon: Pokemon; }) {
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

export default PokemonPage;