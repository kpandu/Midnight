import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import SectionHeader from "./SectionHeader";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Row4 from "./Row4";
import Row5 from "./Row5";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import { Fade } from "react-reveal";
import * as easings from "d3-ease";
export default class Projects extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" style={{ minHeight: "300vh" }}>
          <Container>
            <SectionHeader align="right" title="PROJECTS" description="0x3" />
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={100}
                  config={{
                    duration: 600,
                    easing: x => x
                  }}
                  to={{ width: isVisible ? "50%" : "0%" }}
                >
                  {({ width }) => (
                    <hr
                      width={width}
                      color="white"
                      style={{ marginRight: "0px", marginBottom: "15%" }}
                    ></hr>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </Container>
          <Grid container justify="center" style={{ width: "90vw" }}>
            <Row1 />
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />
          </Grid>
        </Grid>
        <Fade zoom delay={500} duration={1600}>
          <Grid
            container
            justify="center"
            alignItems="center"
            style={{ height: "120vh" }}
            direction="column"
            spacing={2}
          >
            <Grid item container justify="space-evenly">
              <Grid item container justify="center" xs></Grid>
              <Grid item container justify="flex-start" alignItems="center" xs>
                <h1 id="quote" style={{ padding: 0 }}>
                  ...while imagination embraces the entire world, and all there
                  ever will be to know and understand. "
                </h1>
                <h1 id="exp-loc" style={{ textAlign: "start" }}>
                  Albert Einstein
                </h1>
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </div>
    );
  }
}
