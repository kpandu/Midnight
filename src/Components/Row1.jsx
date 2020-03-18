import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-reveal";

export default class Row1 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src="https://cdn.shopify.com/s/files/1/2723/6790/collections/Large_Website_CROPPED-8158_c27a7da0-a6e5-43ea-93b6-f87a33505287_2048x.jpg?v=1515986208"
          title="EXODUS"
          width="100%"
          description="Despite what you think,
           the above image is one of many versions of Sol III. It taught 3-D programming along with the math involved."
          left
        />

        <ProjectCard
          src="https://cdn.shopify.com/s/files/1/2723/6790/collections/Large_Website_CROPPED-8158_c27a7da0-a6e5-43ea-93b6-f87a33505287_2048x.jpg?v=1515986208"
          title="EXODUS"
          description="Despite what you think,
           the above image is one of many versions of Sol III. It taught 3-D programming along with the math involved."
          width="90%"
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
