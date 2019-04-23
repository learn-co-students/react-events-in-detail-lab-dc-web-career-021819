import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick= event=> {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(props){
    console.log(props)
    return(
      <button
        onClick={this.handleClick}
        >Coordinates
      </button>
    )
  }
}

export default CoordinatesButton
