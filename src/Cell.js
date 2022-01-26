import React, { Component } from 'react';

export default class Cell extends Component {
  // each time the state changes from ColorSelector which affects Matrix 
  // the Matrix re-renders and all the Cell components receive the updated value for selectedColor
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
    // getting this from genRow
  }

  handleClick = () => {
    this.setState({
      color: this.props.selectedColor,
    });
  };
  
  render() {
    return (
      <div
        onClick={this.handleClick}
        className="cell"
        style={{ backgroundColor: this.state.color }}
      ></div>
    );
  }
  
}