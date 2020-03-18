import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import { Spring } from "react-spring/renderprops";
import * as easings from "d3-ease";
import VisibilitySensor from "react-visibility-sensor";
import TrackVisibility from "react-on-screen";

export default function Contact() {
  return (
    <div>
      <Grid
        container
        style={{
          minHeight: "100vh",
          position: "relative"
        }}
        alignItems="center"
      >
        <TrackVisibility>
          {({ isVisible }) => (
            <Spring
              delay={1000}
              config={{ duration: 800 }}
              to={{ opacity: isVisible ? 1 : 0 }}
            >
              {({ opacity }) => (
                <div
                  style={{
                    width: "100vw",
                    height: "100vh",
                    left: 0,
                    top: 0,
                    position: "absolute",
                    backgroundColor: "white",
                    opacity
                  }}
                ></div>
              )}
            </Spring>
          )}
        </TrackVisibility>

        <Container>
          <Grid
            container
            style={{ margin: "0" }}
            justify="flex-start"
            alignItems="center"
          >
            <Grid item xs={6}>
              <h1 id="title">EVENTUALLY MIDNIGHT PASSES...</h1>
            </Grid>
          </Grid>

          <Grid
            container
            style={{ marginTop: "5%", marginLeft: "0%" }}
            justify="flex-end"
            alignItems="flex-end"
          >
            <Grid item xs={6}>
              <h1 id="contact-description">
                Midnight is when the line <br />
                between imagination and innovation is blurred.
                <br /> <br />
                Krishan Panduwawala
              </h1>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
