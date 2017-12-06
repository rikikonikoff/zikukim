import React, { Component } from 'react';

class Dancers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    let dancersArray = this.props.dancers;
    let dancers = dancersArray.shift().map(dancer => {
      return(
        <div>
          {dancer.first}
        </div>
      )
    });
    return (
      <div>
      </div>
    )
  }
}

export default Dancers;
