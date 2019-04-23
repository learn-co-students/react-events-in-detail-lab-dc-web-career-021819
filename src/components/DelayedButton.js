import React, { Component } from 'react';

class DelayedButton extends Component {

  onClickButtonEventHandler = event =>{
    event.persist();
    setTimeout(() => {this.props.onDelayedClick(event)}, this.props.delay)
  };

  render(){
    return (
      <button onClick={this.onClickButtonEventHandler}></button>
    )
  }
}

export default DelayedButton;
