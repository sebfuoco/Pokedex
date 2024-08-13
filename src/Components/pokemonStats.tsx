import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';

function PokemonStats(props) {
  const [stats] = useState(props.stats);
  const [pokemonTotalStats, setPokemonTotalStats] = useState(0);

  useEffect(() => {
    let totalStats = 0;
    if (stats !== undefined) {
      Object.entries(stats).forEach(([, value] : any) => {
        totalStats += value.base;
      });
    }
    setPokemonTotalStats(totalStats);
    }, [stats]);

  return (
    stats !== undefined &&
      <Row className='d-flex justify-content-center text-center'>
        <h4>Stats</h4>
        <p className='m-1 infoCol' id='hp'>HP: {stats.hp.base}</p>
        <p className='m-1 infoCol' id='attack'>Attack: {stats.attack.base}</p>
        <p className='m-1 infoCol' id='defense'>Defense: {stats.defense.base}</p>
        <p className='m-1 infoCol' id='specialAtk'>Sp. Atk: {stats.specialAtk.base}</p>
        <p className='m-1 infoCol' id='specialDef'>Sp. Def: {stats.specialDef.base}</p>
        <p className='m-1 infoCol' id='speed'>Speed: {stats.speed.base}</p>
        <p className='m-1 infoCol'>Total: {pokemonTotalStats}</p>
      </Row>
  );
}

export default PokemonStats;