import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pokemonJson from '../Json/pokemonJson.ts';
import PokemonEvolutionChild from './pokemonEvolutionChild.tsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Pokemon } from '../Interfaces/PokemonInterface.ts';

function PokemonEvolution(props: { currentPokemon: any; evolutions: number[] | undefined; setPokemon: (arg0: any) => void; }) {
  const [pokemons, setPokemons] = useState([]);
  const [currentPokemon] = useState(props.currentPokemon);
  useEffect(() => {
    let linkedPokemons : Pokemon[] = [];
    if (props.evolutions === undefined) {
      return;
    }
    props.evolutions.forEach((pokemonId: number) => {
      let linkedPokemon : Pokemon[] = pokemonJson["pokemons"].filter(function(item) { return item.id === pokemonId; });
      if (linkedPokemon.length > 0) {
        linkedPokemons.push(linkedPokemon[0]);
      }
    });
    setPokemons(linkedPokemons);
  }, [props.evolutions]);

  function changePokedexPokemon(pokemon: any) {
    props.setPokemon(pokemon);
  } 

  return (
    <Row className='d-flex justify-content-center text-center'>
      {pokemons !== undefined &&
        pokemons.map((pokemon: any, index: number) => 
          <>
            {index === 0 && <h4>Evolutions</h4>}
            <Col sm={3} className={pokemon !== currentPokemon ? 'cursorPointer' : ''} onClick={() => changePokedexPokemon(pokemon)}>
              <PokemonEvolutionChild pokemon={pokemon}/>
            </Col>
            {pokemon !== pokemons.at(-1) &&
              <Col sm={1} className='alignChevron'>
                <FontAwesomeIcon icon={faChevronRight} />  
              </Col>
            }
          </>
        )
      }
    </Row>
  );
}

export default PokemonEvolution;