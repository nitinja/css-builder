import React, { Component } from "react";
import styled from "styled-components";
import { ChromePicker } from 'react-color';

class ColorSelectorDiv extends Component {
  constructor() {
    super();
    this.state = {
      colorPickerOpen: false, //decides if the colorpicker panel is open
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      }
    }
  }

  onColorChange(color) {
    this.setState({
      ...this.state,
      color: color.rgb
    });
    if (this.props.onColorChange) {
      this.props.onColorChange(color.rgb)
    }
  }

  togglePicker() {
    this.setState({
      ...this.state,
      colorPickerOpen: !this.state.colorPickerOpen
    });
  }

  closePicker() {
    this.setState({
      ...this.state,
      colorPickerOpen: false
    });
  }

  render() {
    /* Styled component! 💅 */


    /* div that shows color box */
    const ColorDiv = styled.div`
      width:100px;
      height:20px;
      background-color: rgba(${ this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})
     `;

    /* Div that shows "glass panel" to close picker popup */
    const OuterGlassCoverDiv = styled.div`
     position:fixed;
      top:0;
      left:0;
      bottom:0;
      right:0;
     `;

    return <div>
      <ColorDiv onClick={this.togglePicker.bind(this)}></ColorDiv>
      {this.state.colorPickerOpen &&
        <div style={{ position: 'absolute', zIndex: 2 }}>
          <OuterGlassCoverDiv onClick={this.closePicker.bind(this)}></OuterGlassCoverDiv>
          <ChromePicker color={this.state.color} onChange={this.onColorChange.bind(this)} />
        </div>}
    </div>;
  }
}

export default ColorSelectorDiv;
