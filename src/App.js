import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/compiled.css";
import "./App.css";
import "./styles/fonts/FiraCode-Regular.woff";
import "./styles/fonts/FiraCode-Bold.woff";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header p-4 text-center">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title font-fira-code font-light">
            CSS Builder{" "}
            <sup class="text-xs" style={{ top: "-1.5em" }}>
              0.1
            </sup>
          </h1>
        </header>
        <div className="output bg-grey p-4">
          <span class="absolute pin-t pin-r">Output</span>
        </div>
        <div className="options p-4">Options</div>
        <div className="code bg-grey p-4">Code</div>
      </div>
    );
  }
}

export default App;
