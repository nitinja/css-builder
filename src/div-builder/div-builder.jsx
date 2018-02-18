import React, { Component } from "react";
// import logo from "./logo.svg";
import Output from "../common-components/output";
import CodeViewer from "../common-components/code-viewer";
import DivConfiguration from "./div-configuration";
import { DivConfig } from "./StyleConfig";

import "./div-builder.css";

class DivBuilder extends Component {
  constructor() {
    super();
    this.state = {
      appliedConfig: DivConfig
    };
    // debugger;
  }

  onChangeConfig(configName, configValue, configProperty) {
    const newConfig = {
      ...this.state.appliedConfig,
      [configName]: {
        ...this.state.appliedConfig[configName],
        [configProperty]: configValue
      }
    }
    this.setState({ appliedConfig: newConfig });
  }

  render() {
    return (
      <div className="div-builder w-full">
        <div className="options p-4 bg-white relative">
          <span className="absolute pin-t pin-r font-light text-xs p-2 text-white bg-blue rounded-bl-lg">
            Config</span>
          <DivConfiguration appliedConfig={this.state.appliedConfig} onChangeConfig={this.onChangeConfig.bind(this)} />
        </div>
        <div className="output bg-lightblue p-4 relative flex items-center justify-center bg-checked">
          <span className="absolute pin-t pin-r font-light text-xs p-2 text-white bg-blue rounded-bl-lg">
            Output
          </span>
          <Output appliedConfig={this.state.appliedConfig} />
        </div>
        <div className="code p-4 bg-white relative">
          <span className="absolute pin-t pin-r font-light text-xs p-2 text-white bg-blue rounded-bl-lg">
            Code</span>
          <CodeViewer appliedConfig={this.state.appliedConfig} />
        </div>
      </div>
    );
  }
}

export default DivBuilder;
