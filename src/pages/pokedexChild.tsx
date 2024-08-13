import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import PokemonStats from '../Components/pokemonStats.tsx';
import PokemonInfo from '../Components/pokemonInfo.tsx';
import PokemonType from '../Components/pokemonType.tsx';
import PokemonDesc from '../Components/pokemonDesc.tsx';
import PokemonEvolution from '../Components/pokemonEvolution.tsx';
import { Pokemon } from '../Interfaces/PokemonInterface.ts';

function PokedexPageChild(props : { pokemon: Pokemon; resetPokemon: any, setPokemon: any}) {
  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => {
    setShow(false);
    props.resetPokemon();
  }
  
  useEffect(() => {
      setShow(true);
    }, [props.pokemon]);

  return (
      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Body>
          <Row className='d-flex justify-content-center text-center mb-2'>
            <PokemonDesc pokemon={props.pokemon} isPokedex={true}/>
          </Row>
          <PokemonType types={props.pokemon.types}/>
          {props.pokemon.info && 
            <PokemonInfo info={props.pokemon.info}/>
          }
          {props.pokemon.stats && 
            <PokemonStats stats={props.pokemon.stats}/>
          }
          {props.pokemon.evolutions && 
            <PokemonEvolution currentPokemon={props.pokemon} evolutions={props.pokemon.evolutions} setPokemon={props.setPokemon}/>
          }
        </Modal.Body>
      </Modal>
  );
}

export default PokedexPageChild;