import React, { Component } from 'react';

export default class Cell extends Component {

//   Cell
// find a way to access the currently selected color from Matrix's state without passing the value explicitly as a prop. (Consider passing a method from Matrix to Cell instead. You will want to create an additional method in Matrix to do this.)
// implement a handleClick method that that updates the Cell's state with the current selected color
  
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

    doClick = () => {
      this.setState({
        color: this.props.getColor()
      })
    }
  
  render() {
    return (
      <div className="cell" onClick={this.doClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}
