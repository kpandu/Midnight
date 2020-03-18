import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-reveal";

export default class Row5 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src={require("../Assets/sol3video.mp4")}
          title="SOL"
          width="50vw"
          video
          description="I really was blinded of how being overly flashy looks good. Before I 
          realized that I was wrong, I made the above graphic that was going to be the at the very top of this
          website. It is a real-time interactive 3D animation in space made with BabylonJS."
        />

        <Grid item xs container justify="center">
          <Fade zoom duration={1600}>
            <h1 id="quote" style={{ marginBottom: "25%", marginTop: "15%" }}>
              "Imagination is more important than knowledge...
            </h1>
          </Fade>
        </Grid>
      </Grid>
    );
  }
}
