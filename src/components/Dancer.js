import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

class Dancer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  };

  render() {

    return (
      <Col xs={10} md={6} lg={4}>
        <Thumbnail src={this.props.photo}>
          <h3>{this.props.fullName}</h3>
          {this.props.profile}
        </Thumbnail>
      </Col>
    )
  }
}

export default Dancer;
