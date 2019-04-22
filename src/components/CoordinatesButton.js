// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component{

  logCoordinates = (event) => {
    let coordinates = [event.clientX, event.clientY]
     this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return <button onClick={this.logCoordinates}>Coordinates</button>
  }
}

export default CoordinatesButton
