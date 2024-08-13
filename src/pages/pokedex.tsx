import pokemonJson from '../Json/pokemonJson.ts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Suspense, lazy, useState } from 'react';
import { Pokemon } from '../Interfaces/PokemonInterface.ts';

const PokemonPage = lazy(() => import('./pokemon.tsx'));
const PokedexPageChild = lazy(() => import('./pokedexChild.tsx'));

function Pokedex() {
    const [pokemon, setPokemon] = useState(null);
    const openPokemonInfo = (pokemon: Pokemon) => setPokemon(pokemon);
    const resetPokemon = () => setPokemon(null);

    return (
        <Container>
            <Row>
                {pokemonJson.pokemons.map((pokemon, index) => 
                    <Suspense fallback={index === 0 && <div>loading...</div>} key={pokemon.id}>
                        <Col sm={4} onClick={() => openPokemonInfo(pokemon)}>
                            <PokemonPage pokemon={pokemon}/>
                        </Col>
                    </Suspense>
                )}
            </Row>
            {pokemon && 
                <Suspense fallback={<div>loading...</div>} key={pokemon.id}>
                    <PokedexPageChild pokemon={pokemon} resetPokemon={resetPokemon} setPokemon={setPokemon}/> 
                </Suspense>
            }
        </Container>
    );
  }
  
  export default Pokedex;