import { Container, Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import { Spring } from 'react-spring/renderprops';
import VisibilitySensor from 'react-visibility-sensor';
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Row4 from './Row4';
import Row5 from './Row5';
import Row6 from './Row6';
import Row7 from './Row7';
import SectionHeader from './SectionHeader';
import './styles.css';
export default class Projects extends Component {
  render() {
    return (
      <div>
        <Grid container justify="center" style={{ minHeight: '300vh' }}>
          <Container>
            <SectionHeader align="right" title="PROJECTS" description="0x3" />
            <VisibilitySensor>
              {({ isVisible }) => (
                <Spring
                  delay={100}
                  config={{
                    duration: 600,
                    easing: (x) => x,
                  }}
                  to={{ width: isVisible ? '50%' : '0%' }}
                >
                  {({ width }) => (
                    <hr
                      width={width}
                      color="white"
                      style={{ marginRight: '0px', marginBottom: '15%' }}
                    ></hr>
                  )}
                </Spring>
              )}
            </VisibilitySensor>
          </Container>
          <Grid container justify="center" style={{ width: '90vw' }}>
            <Row1 />
            <Row6 />
            <Row2 />
            <Row3 />
            <Row4 />
            <Row5 />
            <Row7 />
          </Grid>
        </Grid>
        <Fade zoom delay={500} duration={1600}>
          <Grid container justify="center">
            <Grid
              item
              container
              alignItems="flex-start"
              justify="center"
              direction="column"
              style={{ maxWidth: '60%', height: '100vh' }}
            >
              <h1 id="quote" style={{ padding: 0 }}>
                ...and all there ever will be to know and understand. "
              </h1>
              <h1 id="exp-loc" style={{ textAlign: 'end' }}>
                Albert Einstein
              </h1>
            </Grid>
          </Grid>
        </Fade>
      </div>
    );
  }
}
