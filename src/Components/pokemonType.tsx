import Row from 'react-bootstrap/Row';
import { types } from '../Constants/TypesConstants';

function PokemonType(props : {types : types}) {
  return (
    <Row className='d-flex justify-content-center'>
      {props.types !== undefined &&
        props.types.map(type => 
          <div className={'m-1 mb-2 pill background-' + type}>{type}</div>
        )
      }
    </Row>
  );
}

export default PokemonType;