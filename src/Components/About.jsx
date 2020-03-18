import { Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Fade } from "react-reveal";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import Me from "../Assets/me.png";
import SectionHeader from "./SectionHeader";
import "./styles.css";
export default class Welcome extends Component {
  render() {
    return (
      <Container style={{ minHeight: "130vh", marginTop: "10%" }}>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="flex-end"
        >
          <SectionHeader align="right" title="ABOUT" description="0x1" />
          <VisibilitySensor>
            {({ isVisible }) => (
              <Spring
                config={{ duration: 600, easing: x => x }}
                to={{ width: isVisible ? "50%" : "0%" }}
              >
                {({ width }) => (
                  <hr
                    width={width}
                    color="white"
                    style={{ marginRight: "0px" }}
                  ></hr>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </Grid>
        <Grid container alignContent="center" justify="center">
          <Fade zoom duration={1600}>
            <img src={Me} id="profile-pic" />
          </Fade>

          <Grid
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Grid
              container
              spacing={4}
              alignItems="flex-start"
              style={{ width: "73%" }}
            >
              <Grid item xs>
                <Fade up delay={100}>
                  <h6 className="square-text">
                    Hi, I'm Krishan. Currently I am a student at the University
                    of Maryland, College Park. I am a Junior majoring in
                    Computer Science with an upper level concentration in
                    Mathematics. I have just completed a summer long internship
                    at Boeing Intelligence & Analytics, where I developed a
                    strong interest and skill set for Fullstack Development.
                  </h6>
                </Fade>
              </Grid>
              <Grid item xs>
                <Fade up delay={100}>
                  <h6 className="square-text">
                    Hi, I'm Krishan. Currently I am a student at the University
                    of Maryland, College Park. I am a Junior majoring in
                    Computer Science with an upper level concentration in
                    Mathematics. I have just completed a summer long internship
                    at Boeing Intelligence & Analytics, where I developed a
                    strong interest and skill set for Fullstack Development.
                  </h6>
                </Fade>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
