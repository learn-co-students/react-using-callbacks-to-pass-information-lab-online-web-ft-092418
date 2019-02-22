import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  clickAction = () => {
    this.setState({
      color: this.props.getColor()
    })
  }
  
  render() {
    return (
      <div className="cell" onClick={this.clickAction} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
