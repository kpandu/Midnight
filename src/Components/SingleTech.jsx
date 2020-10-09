import { Grid } from '@material-ui/core';
import * as easings from 'd3-ease';
import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen';
import { Fade } from 'react-reveal';
import { animated } from 'react-spring';
import { Spring } from 'react-spring/renderprops';
import './styles.css';
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
        xs={this.props.middle ? 12 : 4}
        md="4"
        className="tech-background"
        style={{
          background:
            'linear-gradient(164deg, rgba(24,57,109,1) 0%, rgba(22,34,77,1) 100%);',
        }}
      >
        <TrackVisibility>
          {({ isVisible }) =>
            isVisible && (
              <Spring
                from={{ value: 2 }}
                to={{ value: 50 }}
                config={{
                  duration: 5500,
                  easing: easings.easeCubic,
                }}
                delay={this.props.delay}
              >
                {(props) => (
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

        <Fade delay={1800 + this.props.delay / 1.5}>
          <h1 id="tech-title" style={{ color: this.props.color }}>
            {this.props.title}
          </h1>
        </Fade>
        <h1 id="tech-list">
          {this.props.list.map((x) => {
            return (
              <Fade delay={1800 + this.props.delay / 1.5} key={x}>
                {x}
              </Fade>
            );
          })}
        </h1>
      </Grid>
    );
  }
}
