import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';

function PokemonType(props) {
  const [types] = useState(props.types);

  return (
    <Row className='d-flex justify-content-center'>
      {types !== undefined &&
        types.map(type => 
          <div className={'m-1 mb-2 pill background-' + type}>{type}</div>
        )
      }
    </Row>
  );
}

export default PokemonType;