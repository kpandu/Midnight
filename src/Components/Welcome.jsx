import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import video from "../Assets/welcome_Trim.mp4";
import bg_video from "../Assets/welcome-bg.mp4";
import { Fade } from "react-reveal";
export default class Welcome extends Component {
  replay = () => {
    document.getElementsByTagName("video")[0].play();
    document.getElementsByTagName("video")[1].play();
  };
  render() {
    return (
      <div style={{ minHeight: "100vh" }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          className="video-parallax"
        >
          <video
            id="bg-parallax"
            muted="muted"
            autoPlay
            src={bg_video}
            onEnded={this.replay}
            type="video/mp4"
            preload="true"
          ></video>
        </Grid>

        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            height: "100vh",
            position: "absolute",
            top: "0",
          }}
        >
          <video
            preload="true"
            id="zoom"
            muted="muted"
            autoPlay
            src={video}
            onEnded={this.replay}
            type="video/mp4"
          ></video>
        </Grid>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{
            height: "100vh",
            position: "absolute",
            top: "0",
          }}
        >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="flex-start"
            style={{
              width: "65%",
              height: "55%",
              position: "relative",
            }}
          >
            <div style={{ marginLeft: "-10%" }}>
              <h1 id="title">
                <Fade bottom>PROJECT: MIDNIGHT</Fade>
              </h1>
              <h1 id="overlay-caption" onClick={this.replay}>
                <Fade bottom delay={220}>
                  KRISHAN PANDUWAWALA
                </Fade>
              </h1>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
