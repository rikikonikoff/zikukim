import React from 'react';

const Dancers = props => {
  let dancers = props.googleSpreadsheet.values
  return (
    <div>
      {dancers}
    </div>
  )
}

export default Dancers;
