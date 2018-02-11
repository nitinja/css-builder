import React, { Component } from "react";

class DivConfiguration extends Component {
  constructor() {
    super();
    this.state = {
      'borderSize': 0
    }
  }
  onChangeConfig(event) {
    this.setState({ borderSize: event.target.value }, () => {
      this.props.onChangeConfig({ "border": this.state.borderSize + "px solid red" })
    });

  }
  render() {
    return (
      <div>
        {/* <span>  Config View! {this.refs.borderSize}</span> */}
        <div>
          Border Size <input
            type="range"
            min="0"
            value={this.state.borderSize}
            ref="borderSize"
            onChange={this.onChangeConfig.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default DivConfiguration;
