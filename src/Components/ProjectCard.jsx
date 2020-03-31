import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import "./styles.css";
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
          marginBottom: "5%"
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
            <Tilt options={{ max: 6 }}>
              <Fade zoom>
                <img
                  src={this.props.src}
                  id="proj-img"
                  style={{
                    width: this.props.width
                  }}
                />
              </Fade>
            </Tilt>
          )}
          {this.props.video && (
            <Tilt options={{ max: 6 }}>
              <Fade zoom>
                <video
                  muted="muted"
                  autoPlay
                  preload="auto"
                  src={this.props.src}
                  style={{
                    width: this.props.width,
                    minWidth: "300px",
                    borderRadius: this.props.phone ? "21px" : "0px"
                  }}
                  loop
                  type="video/mp4"
                ></video>
              </Fade>
            </Tilt>
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
