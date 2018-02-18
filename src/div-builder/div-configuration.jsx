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
          Border Size <input
            type="range"
            min="0"
            value={this.props.appliedConfig.borderWidth.value}
            ref="borderWidth"
            onChange={event => this.onChangeConfig('borderWidth', event.target.value)}
          />
        </div>
        <div>
          Border Radius <input
            type="range"
            min="0"
            value={this.props.appliedConfig.borderRadius.value}
            ref="borderRadius"
            onChange={event => this.onChangeConfig('borderRadius', event.target.value)}
          />
        </div>
        <div>
          Border Color

          <ColorSelectorDiv
            value={this.props.appliedConfig.borderColor.value}
          />

          <ColorSelectorDiv onColorChange={}></ColorSelectorDiv>

          <input
            type="text"
            min="0"
            value={this.props.appliedConfig.borderColor.value}
            ref="borderColor"
            onChange={this.onChangeConfig.bind(this, 'borderColor')}
          />
        </div>
      </div>
    );
  }
}

export default DivConfiguration;
