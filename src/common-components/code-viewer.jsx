import React, { Component } from "react";

class CodeViewer extends Component {

  render() {
    const style = getStyleList(this.props.appliedConfig);
    return <div>
      {".box {"}
      {style.map((item, index) => {
        return <div key={index}>&emsp;{item}</div>
      })}
      {"}"}
    </div>;
  }
}

export function getStyleList(appliedConfig) {
  const style = [];
  Object.keys(appliedConfig).forEach(key => {
    const configObject = appliedConfig[key];
    style.push(configObject.name + ": " + configObject.getStyle(configObject) + ";");
  });
  return style;
}

export default CodeViewer;
