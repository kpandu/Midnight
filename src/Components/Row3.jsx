import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import canny from "../Assets/canny.png";
import "./styles.css";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal";

export default class Row3 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <Grid item xs container justify="center">
          <Fade zoom duration={1600}>
            <h1 id="quote" style={{ marginBottom: "25%", marginTop: "15%" }}>
              ...for knowledge is limited to all we now know and understand...
            </h1>
          </Fade>
        </Grid>
        <ProjectCard
          src={require("../Assets/tasker.mp4")}
          title="TASKER"
          width="30vh"
          phone
          description="Tasker is a task manager app made for Android. It uses firebase
           for authentication and database storage."
          video
        />

        <ProjectCard
          src={canny}
          title="CANNY EDGE DETECTION"
          description="Canny edge detection using only numpy and pillow. First a gaussian blur filter is applied. Then
          gradient filters are applied. The the resulting matricies are used to compute edge strength and edge orientation.
          There are used to conduct non maximum suppression yielding the above image after a threshold is applied."
          width="100%"
          top="30%"
        />
      </Grid>
    );
  }
}
