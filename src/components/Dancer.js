import React, { Component } from 'react';

class Dancer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    return (
      <div>
        {this.props.id}
      </div>
    )
  }
}

export default Dancer;
