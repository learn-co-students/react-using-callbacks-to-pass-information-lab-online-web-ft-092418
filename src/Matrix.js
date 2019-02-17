import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

// Matrix
// provide a way for Matrix to keep track of the selected color (think state!)
// write a method that takes in a single argument of a hex color string (i.e. '#fff') and sets the selected color to that
// consider what should be done with that method once it is written. Who needs it? How can we get it to them? Use the skills you already have with React to solve this

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '#fff'
    }
  }

  setSelectedColor = (str) => {
    this.setState({
      color: str
    })
  }

  getColor = () => (this.state.color)

  genRow = (vals) => (
    vals.map((val, idx) => <Cell getColor={this.getColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
