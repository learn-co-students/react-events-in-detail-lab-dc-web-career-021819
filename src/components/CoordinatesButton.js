import React, { Component } from 'react'

class CoordinatesButton extends Component {

  onClickButtonEventHandler = event => this.props.onReceiveCoordinates([event.pageX, event.pageY]);

  render(){
    return (
      <button onClick={this.onClickButtonEventHandler} ></button>
    )
  }
}

export default CoordinatesButton;
