import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/compiled.css";
import "./App.css";
import "./styles/fonts/FiraCode-Regular.woff";
import "./styles/fonts/FiraCode-Bold.woff";

class App extends Component {
  render() {
    // const block_style = {

    // };
    return (
      <div className="app">
        <header className="app-header p-4 text-center">
          {/* <img src={logo} className="app-logo" alt="logo" /> */}
          <h1 className="app-title font-fira-code font-light">
            CSS Builder{" "}
            <sup class="text-xs" style={{ top: "-1.5em" }}>
              0.1
            </sup>
          </h1>
        </header>
        <div className="output bg-grey p-4 relative">
          <span class="absolute pin-t pin-r bg-grey-light font-light">Output</span>
        </div>
        <div className="options p-4 bg-grey-light relative">
          <span class="absolute pin-t pin-r bg-grey-light">Options</span>
        </div>
        <div className="code bg-grey p-4 bg-grey-light relative">
          <span class="absolute pin-t pin-r bg-grey-light">Code</span>
        </div>
        <div class="main-footer bg-grey-light">footer</div>
      </div>
    );
  }
}

export default App;
