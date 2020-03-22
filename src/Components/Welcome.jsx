import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import "./styles.css";
import video from "../Assets/welcome_Trim.mp4";
import { Fade } from "react-reveal";
export default class Welcome extends Component {
  replay = () => {
    document.getElementsByTagName("video").currentTime = 0;
    document.getElementsByTagName("video")[0].play();
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
            loop
            src={video}
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
            top: "0"
          }}
        >
          <video
            preload="true"
            id="zoom"
            muted="muted"
            loop
            autoPlay
            src={video}
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
            top: "0"
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
              position: "relative"
            }}
          >
            <div style={{ marginLeft: "-10%" }}>
              <h1 id="title">
                <Fade bottom>PROJECT: MIDNIGHT</Fade>
              </h1>
              <h1 id="overlay-caption">
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
