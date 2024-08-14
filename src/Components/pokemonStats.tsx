import {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import { Stats } from '../Interfaces/StatInterface';

function PokemonStats(props : {stats: Stats}) {
  const [stats] = useState<Stats>(props.stats);
  const [pokemonTotalStats, setPokemonTotalStats] = useState<number>(0);

  useEffect(() => {
    let totalStats : number = 0;
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
        <p className='m-1 infoCol' id='hp'>HP: <br/> {stats.hp.base}</p>
        <p className='m-1 infoCol' id='attack'>Attack: <br/> {stats.attack.base}</p>
        <p className='m-1 infoCol' id='defense'>Defense: <br/> {stats.defense.base}</p>
        <p className='m-1 infoCol' id='specialAtk'>Sp. Atk: <br/> {stats.specialAtk.base}</p>
        <p className='m-1 infoCol' id='specialDef'>Sp. Def: <br/> {stats.specialDef.base}</p>
        <p className='m-1 infoCol' id='speed'>Speed: <br/> {stats.speed.base}</p>
        <p className='m-1 infoCol'>Total: <br/> {pokemonTotalStats}</p>
      </Row>
  );
}

export default PokemonStats;