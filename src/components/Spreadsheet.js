import React, { Component } from 'react';
import Dancers from 'components/Dancers';

class Spreadsheet extends Component {
  constructor(props){
    super(props);
    this.state = {
      dancers: []
    }
    this.createDancersArray = this.createDancersArray.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    let sheet = nextProps.sheet;
    let dancersArray = this.createDancersArray(sheet.values);

    this.setState({
      dancers: dancersArray
    });
  };

  createDancersArray(values) {
    let keys = values.shift();
    let dancers = new Array(values.length);

    values.map((value, index) => {
      dancers[index] = {};

      return keys.map((key, i) => {
        return (
          dancers[index][key] = values[index][i]
        )
      })
    })

    return dancers;
  }

  render() {
    return(
      <div>
        <Dancers dancers={this.state.dancers} />
      </div>
    )
  };
};

export default Spreadsheet;
