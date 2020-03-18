import React, { Component, Fragment } from "react";
import { Grid, Container, SvgIcon } from "@material-ui/core";
import "./styles.css";
import { Fade } from "react-reveal";
import { useSpring, animated } from "react-spring";
import { Spring, config } from "react-spring/renderprops";
import * as easings from "d3-ease";
import TrackVisibility from "react-on-screen";
export default class SingleTech extends Component {
  render() {
    console.log(this.props);

    return (
      <Grid
        item
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        xs
      >
        <TrackVisibility>
          {({ isVisible }) =>
            isVisible && (
              <Spring
                from={{ value: 2 }}
                to={{ value: 50 }}
                config={{
                  duration: 5500,
                  easing: easings.easeCubic
                }}
                delay={this.props.delay}
                reset
              >
                {props => (
                  <Fade zoom delay={this.props.delay}>
                    <animated.svg
                      width="55"
                      height="55"
                      stroke={this.props.color}
                      fill="none"
                      strokeWidth={0.7}
                      strokeDasharray={props.value * 3}
                      strokeDashoffset={props.value}
                    >
                      <this.props.svg></this.props.svg>
                    </animated.svg>
                  </Fade>
                )}
              </Spring>
            )
          }
        </TrackVisibility>
        ) }
        <Fade cascade delay={1600 + this.props.delay / 1.5}>
          <h1 id="tech-title" style={{ color: this.props.color }}>
            {this.props.title}
          </h1>
        </Fade>
        <h1 id="tech-list">
          {this.props.list.map(x => {
            return (
              <Fade cascade delay={1600 + this.props.delay / 1.5} key={x}>
                {x}
              </Fade>
            );
          })}
        </h1>
      </Grid>
    );
  }
}
