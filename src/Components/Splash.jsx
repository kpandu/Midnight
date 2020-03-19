import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import ProjectCard from "./ProjectCard";
import { Fade } from "react-reveal";
import * as easings from "d3-ease";
import { animated } from "react-spring";
import { Spring } from "react-spring/renderprops";
import VisibilityOutlinedIcon from "@material-ui/icons/NightsStay";
import Expire from "./Expire";
export default class Splash extends Component {
  disableScrolling() {
    var x = 0;
    var y = 0;

    window.onscroll = function() {
      window.scrollTo(x, y);
    };
  }

  enableScrolling() {
    window.onscroll = function() {};
  }
  componentDidMount() {
    this.disableScrolling();
  }
  render() {
    return (
      <Expire
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 55
        }}
        delay={9000}
      >
        <Spring
          from={{ value: 2, opacity: 7 }}
          to={{ value: 38, opacity: 0 }}
          config={{
            duration: 9000,
            easing: easings.easeCubic
          }}
        >
          {props => (
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{
                width: "100vw",
                height: "100vh",
                zIndex: 39999,
                position: "relative",
                backgroundColor: "black",
                opacity: props.opacity
              }}
            >
              <Fade zoom>
                <animated.svg
                  width="75"
                  height="75"
                  stroke="white"
                  fill="none"
                  strokeWidth={0.7}
                  strokeDasharray={props.value * 3}
                  strokeDashoffset={props.value}
                >
                  <VisibilityOutlinedIcon />
                </animated.svg>
              </Fade>
            </Grid>
          )}
        </Spring>
      </Expire>
    );
  }
}
