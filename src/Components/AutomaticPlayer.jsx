import React, { Component, useState } from "react";
import { Waypoint } from "react-waypoint";
import ReactPlayer from "react-player";
// https://github.com/CookPete/react-player/issues/569 code referenced from here
class AutomaticPlayer extends Component {
  state = {
    playing: false
  };
  render() {
    return (
      <Waypoint onEnter={() => this.setState({ playing: true })}>
        <ReactPlayer {...this.props} playing={this.state.playing} />
      </Waypoint>
    );
  }
}
export default AutomaticPlayer;
