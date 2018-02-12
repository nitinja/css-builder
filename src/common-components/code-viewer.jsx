import React, { Component } from "react";

class CodeViewer extends Component {
  getCSSFromConfig(config) {
    //currently it return config as is
    return config;
  }
  render() {

    const appliedCSS = this.getCSSFromConfig(this.props.appliedConfig);
    // console.log(this.props.appliedCSS);
    return <div>
      <pre>{JSON.stringify(appliedCSS, null, 2)}</pre>
    </div>;
  }
}

export default CodeViewer;
