import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function PokemonInfo(props) {
  const [info] = useState(props.info);
  
  return (
    info !== undefined &&
      <Row className='d-flex justify-content-center text-center'>
        <h4>Info</h4>
        <p className='m-1 infoCol'>Height: {info.height}</p>
        <p className='m-1 infoCol'>Weight: {info.weight}</p>
        <p className='m-1 infoCol'>Species: {info.species}</p>
        <div className='mt-2 d-flex justify-content-center'>
          {info.abilties !== undefined &&
            info.abilties.map(abilty => 
              <OverlayTrigger
                placement="top"
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                  {abilty.description}
                </Tooltip>
                }>
                  <div className='m-1 mb-2 pill helpCursor'>{abilty.name}</div>
              </OverlayTrigger>
            )
          }
        </div>
      </Row>
  );
}

export default PokemonInfo;