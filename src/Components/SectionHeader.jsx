import React, { Component } from "react";
import "./styles.css";
import Fade from "react-reveal";
export default class SectionHeader extends Component {
  render() {
    return (
      <div>
        <h1
          id="title"
          style={{ textAlign: this.props.align === "right" ? "end" : "start" }}
        >
          {this.props.title}
        </h1>
        <h1
          id="overlay-paragraph"
          style={{ textAlign: this.props.align === "right" ? "end" : "start" }}
        >
          {this.props.description}
        </h1>
      </div>
    );
  }
}
