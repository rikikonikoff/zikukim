import React from 'react';
import { Jumbotron, Row } from 'react-bootstrap';
import Dancer from 'components/Dancer';

const Dancers = props => {
  let dancers = props.dancers.map(dancer => {
    let name = dancer['First Name'].concat(' ').concat(dancer['Last Name'])
    return (
      <Dancer
        key={name}
        fullName={name}
        firstName={dancer['First Name']}
        lastName={dancer['Last Name']}
        photo={dancer['Photo']}
        profile={dancer['Profile']}
      />
    )
  });

  return (
    <Jumbotron>
      <Row>
        <h1>Meet the Dancers</h1>
        <br />
      </Row>
      <Row className='dancersContainer'>
        {dancers}
      </Row>
    </Jumbotron>
  )
}

export default Dancers;
