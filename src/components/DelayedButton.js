import React, { Component } from 'react';

class DelayedButton extends Component {
  constructor(props) {
    super(props);
  }

  eventHandler = (event) => {
    event.persist()
    setTimeout(()=>this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return (
      <button onClick={this.eventHandler}>delay</button>
    )
  }

}

export default DelayedButton;
