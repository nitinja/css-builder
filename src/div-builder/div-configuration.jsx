import React, { Component } from "react";
import ColorSelectorDiv from "../common-components/color-selctor-div";

class DivConfiguration extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  onChangeConfig(configName, value, property = 'value') {
    // const val = this.props.appliedConfig[configName].isNumeric ? parseInt(event.target.value) : event.target.value;
    this.props.onChangeConfig(configName, value, property);
  }

  render() {
    return (
      <div>
        {/* <span>  Config View! {this.refs.borderWidth}</span> */}
        <div>
          Width <input
            type="number"
            min="0"
            value={this.props.appliedConfig.width.value}
            onChange={event => this.onChangeConfig('width', event.target.value)}
          />
        </div>
        <div>
          Height <input
            type="number"
            min="0"
            value={this.props.appliedConfig.height.value}
            onChange={event => this.onChangeConfig('height', event.target.value)}
          />
        </div>
        <div>
          Border Size <input
            type="range"
            min="0"
            value={this.props.appliedConfig.borderWidth.value}
            onChange={event => this.onChangeConfig('borderWidth', event.target.value)}
          />
        </div>

        <div>
          Border Radius <input
            type="range"
            min="0"
            value={this.props.appliedConfig.borderRadius.value}
            onChange={event => this.onChangeConfig('borderRadius', event.target.value)}
          />
        </div>
        <div>
          Border Color
          <ColorSelectorDiv
            value={this.props.appliedConfig.borderColor.value}
            onColorChange={this.onChangeConfig.bind(this, 'borderColor')}>
          </ColorSelectorDiv>
          Background Color
          <ColorSelectorDiv
            value={this.props.appliedConfig.backgroundColor.value}
            onColorChange={this.onChangeConfig.bind(this, 'backgroundColor')}>
          </ColorSelectorDiv>

          <div>
            Border Style
            <select value={this.props.appliedConfig.borderStyle.value} onChange={event => this.onChangeConfig('borderStyle', event.target.value)}>
              <option value="solid">Solid</option>
              <option value="dashed">Dashed</option>
              <option value="dotted">Dotted</option>
            </select>
          </div>          
        </div>
      </div>
    );
  }
}

export default DivConfiguration;
