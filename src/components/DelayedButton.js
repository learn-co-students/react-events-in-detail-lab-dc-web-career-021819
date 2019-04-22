// Code DelayedButton Component Here
import React, {Component} from 'react'
class DelayedButton extends Component{

  handleClick = (event) => {
    event.persist()
    const delayFunc = () => {
      this.props.onDelayedClick(event)
    }
    setTimeout(delayFunc, this.props.delay)
  }

  render(){
    return (
      <button onClick={this.handleClick}>
      Delayed Button
      </button>
    )
  }
}

export default DelayedButton
