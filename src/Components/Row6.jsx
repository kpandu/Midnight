import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Fade } from "react-reveal";
import ProjectCard from "./ProjectCard";
import "./styles.css";

export default class Row6 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src={require("../Assets/SOL4crop.jpg")}
          title="PROJECT CANVAS"
          width="80%"
          description="This website was the one that preceded the one you are viewing. It gave me the 
          inspiration for really bold text, and incorporating a simple design. Its over-simplicity led to its downfall,
           which led to the more daring yet simple Project Midnight."
          center
        />

        <ProjectCard
          src={require("../Assets/MediaCNN.mp4")}
          title="MEDIA CONTROLLER CNN"
          width="50vw"
          video
          description={
            <>
              Through Tensorflow and CV2, a convolutional nerual network using
              transfer learning is trained to learn hand gestures and induce
              media controls. Below are the gestures: <br />
              <br />
              No Hand: Pause Music after 6 seconds of inactivity. Music will
              resume automatically upon hand visibility. <br />
              Fist: Play/Pause <br /> Thumb Out: Back <br /> Pinky Out: Skip{" "}
              <br /> Normal: Do Nothing{" "}
            </>
          }
        />
      </Grid>
    );
  }
}
