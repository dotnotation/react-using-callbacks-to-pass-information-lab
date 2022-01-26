import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'
// ColorSelector needs a way to set some selected color in Matrix
// Cell needs a way to know what the current selected color is when it is clicked
// need to use callbacks as props
export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#fff'
    }
  }

  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  } // this changes the state value

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  ) // returns a collection of Cell components
  // Cell is getting color props from color={val}
  // cell only needs to know the currently selected color, not change it
  // we can pass this in to every cell returned by genRow() as a prop called selectedColor
  // Cell is getting props from here

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  ) // when using an arrow function you can use parentheses instead of curly braces to implicitly return a value
  

  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
  // passing setSelectedColor down to ColorSelector through props
  // ColorSelector is getting props from here
}

Matrix.defaultProps = {
  values: learnSymbol
}