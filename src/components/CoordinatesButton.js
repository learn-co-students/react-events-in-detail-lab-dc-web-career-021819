import React, { Component } from 'react';

class CoordinatesButton extends Component {

  getCoor = (event) => {
    this.props.onReceiveCoordinates([event.screenX, event.screenY])
  }
  render() {
    return (
      <button onClick={this.getCoor}>Coordinates</button>
    );
  }

}

export default CoordinatesButton;
