import React, { Component } from "react";

class DivConfiguration extends Component {
  constructor() {
    super();
  }
  onChangeConfig() {
    this.props.onChangeConfig({ "border-size": this.refs.borderSize });
  }
  render() {
    return (
      <div>
        Config View! {this.refs.borderSize}
        <div>
          <input
            type="number"
            min="0"
            required
            ref="borderSize"
            onChange={this.onChangeConfig.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default DivConfiguration;
