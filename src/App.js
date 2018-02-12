import React, { Component } from "react";
// import logo from "./logo.svg";
import "./styles/compiled.css";
import "./App.css";
import "./styles/fonts/FiraCode-Regular.woff";
import "./styles/fonts/FiraCode-Bold.woff";
import DivBuilder from "./div-builder/div-builder";

class App extends Component {
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
      <div className="app flex flex-col">
        <header className="app-header p-6 text-center">
          <h1 className="text-white font-fira-code font-light">
            CSS Builder{" "}
            <sup className="text-xs" style={{ top: "-1.5em" }}>
              0.1
            </sup>
          </h1>
        </header>
        <div className="content flex-1 flex">
          <DivBuilder />
        </div>
        <div className="app-footer text-blue font-light text-xs flex items-center justify-center h-10">
          Code by Nitin Jhav and contributors (c) {new Date().getFullYear()}
        </div>
      </div>
    );
  }
}

export default App;
