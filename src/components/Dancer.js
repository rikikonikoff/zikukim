import React, { Component } from 'react';

class Dancer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {
    return (
      <div className='columns small-6'>
        {this.props.id}
      </div>
    )
  }
}

export default Dancer;
