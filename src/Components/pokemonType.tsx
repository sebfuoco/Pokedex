import Row from 'react-bootstrap/Row';

function PokemonType(props : {types : readonly string[]}) {
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