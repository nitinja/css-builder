import React, { Component } from "react";
// import logo from "./logo.svg";
import "./styles/compiled.css";
import "./App.css";
import "./styles/fonts/FiraCode-Regular.woff";
import "./styles/fonts/FiraCode-Bold.woff";
import Output from "./components/output";
import CodeViewer from "./components/code-viewer";
import DivConfiguration from "./components/div-configuration";

class App extends Component {
  constructor() {
    super();
    this.state = {
      appliedCSS: {}
    };
  }

  onChangeConfig(newConfig) {
    this.setState({ appliedCSS: newConfig });
  }



  render() {
    return (
      <div className="app">
        <header className="app-header p-4 text-center">
          <h1 className="text-white font-fira-code font-light">
            CSS Builder{" "}
            <sup className="text-xs" style={{ top: "-1.5em" }}>
              0.1
            </sup>
          </h1>
        </header>
        <div className="options p-4 bg-yellow relative">
          <span className="absolute pin-t pin-r text-xs">Options</span>
          <DivConfiguration onChangeConfig={this.onChangeConfig.bind(this)} />
        </div>
        <div className="output bg-lightblue p-4 relative">
          <span className="absolute pin-t pin-r font-light text-xs">
            Output
          </span>
          <Output appliedCSS={this.state.appliedCSS} />
        </div>
        <div className="code bg-grey p-4 bg-grey-lighter relative">
          <span className="absolute pin-t pin-r text-xs">Code</span>
          <CodeViewer appliedCSS={this.state.appliedCSS} />
        </div>
        <div className="app-footer text-blue font-light text-center">
          Code by Nitin Jahhav and contributors, 2018
        </div>
      </div>
    );
  }
}

export default App;
