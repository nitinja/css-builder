import React, { Component } from "react";
// import logo from "./logo.svg";
import Output from "../common-components/output";
import CodeViewer from "../common-components/code-viewer";
import DivConfiguration from "./div-configuration";

import "./div-builder.css";

class DivBuilder extends Component {
  constructor() {
    super();
    this.state = {
      appliedConfig: {}
    };
  }

  onChangeConfig(newConfig) {
    this.setState({ appliedConfig: newConfig });
  }

  render() {
    return (
      <div className="div-builder w-full">
        <div className="options p-4 bg-yellow relative">
          <span className="absolute pin-t pin-r text-xs">Options</span>
          <DivConfiguration onChangeConfig={this.onChangeConfig.bind(this)} />
        </div>
        <div className="output bg-lightblue p-4 relative">
          <span className="absolute pin-t pin-r font-light text-xs">
            Output
          </span>
          <Output appliedConfig={this.state.appliedConfig} />
        </div>
        <div className="code bg-grey p-4 bg-grey-lighter relative">
          <span className="absolute pin-t pin-r text-xs">Code</span>
          <CodeViewer appliedConfig={this.state.appliedConfig} />
        </div>
      </div>
    );
  }
}

export default DivBuilder;
