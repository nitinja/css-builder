import React, { Component } from "react";

class Output extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>
      {/* props {this.props.appliedCSS['border']} */}
      <div style={this.props.appliedConfig}>test div</div>
    </div>;
  }
}

export default Output;
