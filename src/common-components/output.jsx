import React, { Component } from "react";
import styled from "styled-components";
import { getStyleList } from './code-viewer';

class Output extends Component {
  render() {
    const style = getStyleList(this.props.appliedConfig);

    const OutputDiv = styled.div`
      width:200px;
      height:200px;
      ${style}
     `;

    return <OutputDiv ></OutputDiv>;
  }
}

export default Output;
