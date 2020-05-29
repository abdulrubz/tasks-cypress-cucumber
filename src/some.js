import React, { Component } from "react";

export default class some extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.style = {
      display: none,
    };
  }
  render() {
    return <div style={this.styles}></div>;
  }
}
