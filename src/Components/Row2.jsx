import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";
import crystalold from "../Assets/crystalold.png";
import crystalnew from "../Assets/crystalnew.png";
export default class Row2 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="center" spacing={1}>
        <ProjectCard
          src={crystalold}
          title=""
          width="100%"
          top="15%"
          description=""
          center
        />
        <Grid item container justify="flex-start" xs style={{ margin: "20px" }}>
          <Fade bottom>
            <h1 className="project-title">CRYSTAL SKY</h1>

            <h1 id="project-paragraph">
              Given a picture of the sky, the program will use CV2 to filter for
              stars, then using these stars as coordinates and points found
              through canny edge detection, Delaunay triangulation is applied
              creating an artistic representation of the image. Edge detection
              preserves the outline of non-sky elements when triangulated.
            </h1>
          </Fade>
        </Grid>
        <ProjectCard
          src={crystalnew}
          title=""
          description=""
          width="100%"
          top="0vw"
          center
        />
      </Grid>
    );
  }
}
