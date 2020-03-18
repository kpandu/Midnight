import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import Tilt from "react-tilt";
import Fade from "react-reveal/Fade";
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";
import AutomaticPlayer from "./AutomaticPlayer";
export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let side = "flex-start";
    if (this.props.left) side = "flex-end";
    if (this.props.center) side = "center";
    return (
      <Grid
        item
        container
        xs
        justify={side}
        style={{
          marginBottom: "5%",
          marginTop: this.props.top
        }}
      >
        <Grid
          container
          item
          alignItems="flex-start"
          justify="flex-start"
          direction="column"
          style={{ width: this.props.width }}
        >
          {!this.props.video && (
            <Fade zoom>
              <Tilt options={{ max: 6 }}>
                <img
                  src={this.props.src}
                  id="proj-img"
                  style={{
                    width: this.props.width
                  }}
                />
              </Tilt>
            </Fade>
          )}
          {this.props.video && (
            <video
              muted="muted"
              autoPlay
              preload="auto"
              src={this.props.src}
              style={{
                width: this.props.width,
                borderRadius: this.props.phone ? "21px" : "0px"
              }}
              loop
              type="video/mp4"
            ></video>
          )}
          <Fade bottom>
            <h1 className="project-title">{this.props.title}</h1>

            <h1 id="project-paragraph">{this.props.description}</h1>
          </Fade>
        </Grid>
      </Grid>
    );
  }
}
