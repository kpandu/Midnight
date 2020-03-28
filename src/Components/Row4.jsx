import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import sol2 from "../Assets/sol2video.mp4";
import ProjectCard from "./ProjectCard";
import "./styles.css";
export default class Row4 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src={require("../Assets/SOL4crop.jpg")}
          title="PROJECT CANVAS"
          width="100%"
          description="This website was the one that preceded the one you are viewing. It gave me the 
          inspiration for really bold text, and being really plain. Of course, it felt really boring
          and unrepresentative of my true character. This is why I sidelined the site and made Midnight,
          which is intended to be unique."
          center
          width="400px"
        />

        <ProjectCard
          src={sol2}
          title="PROJECT PARALLAX"
          description="I was really interested in parallax and wanted to learn React, therefore I combined the
          2 into the site above. It built a strong foundation in states and functional/class components. The site
          features a parallax downfall from space to the bottom of the sea."
          width="60vw"
          center
          video
        />
      </Grid>
    );
  }
}
