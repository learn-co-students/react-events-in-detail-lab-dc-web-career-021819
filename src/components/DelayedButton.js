// Code DelayedButton Component Here
import React, {Component} from 'react'

export default class DelayedButton extends Component {
  clickHandler = (e) => {
    // console.log(e)
    e.persist()
    let event = this.props.onDelayedClick(e)
    let timeout = this.props.delay
    setTimeout(()=>{event}, timeout)
  }
  render(){
    return (
      <button onClick={this.clickHandler}>Hi from delaybtn</button>
    )
  }
}
