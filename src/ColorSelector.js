import React, { Component } from 'react';

export default class ColorSelector extends Component {
// by passing a callback down as a prop, this component was able to cause a change in state in its parent Matrix

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      let callback = () => this.props.setSelectedColor(str)
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
    // writing a function inside the map to access the color values needed
    // clicking on a particular div inside ColorSelector will set state in Matrix
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
