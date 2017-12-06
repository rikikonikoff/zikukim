import React from 'react';
import Dancer from 'components/Dancer';

const Dancers = props => {
  let dancers = props.dancers.map(dancer => {
    let name = dancer['First Name'].concat(' ').concat(dancer['Last Name'])
    return (
      <Dancer
        key={name}
        id={name}
        firstName={dancer['First Name']}
        lastName={dancer['Last Name']}
        photo={dancer['Photo']}
      />
    )
  });

  return (
    <div>
      {dancers}
    </div>
  )
}

export default Dancers;
