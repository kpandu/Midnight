import React, { useState } from "react";
import { Waypoint } from "react-waypoint";
import ReactPlayer from "react-player";
// https://github.com/CookPete/react-player/issues/569 code referenced from here
const AutomaticPlayer = function(props) {
  let [shouldPlay, updatePlayState] = useState(false);

  let handleEnterViewport = function() {
    updatePlayState(true);
  };
  let handleExitViewport = function() {
    updatePlayState(false);
  };

  return (
    <Waypoint onEnter={handleEnterViewport} onLeave={handleExitViewport}>
      <ReactPlayer playing={shouldPlay} {...props} />
    </Waypoint>
  );
};

export default AutomaticPlayer;
