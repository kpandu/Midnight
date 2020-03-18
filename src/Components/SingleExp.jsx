import React, { Component, Fragment } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import Fade from "react-reveal";
export default class SingleExp extends Component {
  render() {
    return (
      <Grid container style={{ marginTop: "8% ", marginBottom: "10%" }}>
        <Grid container item justify="flex-end" xs>
          <Grid container item direction="column" alignItems="flex-start">
            <Fade up>
              <h1 id="exp-title">{this.props.title}</h1>
              <h1 id="exp-caption">{this.props.caption.toUpperCase()}</h1>
              <h1 id="exp-caption">{this.props.date.toUpperCase()}</h1>
              <h1 id="exp-caption">{this.props.loc.toUpperCase()}</h1>
            </Fade>
          </Grid>
        </Grid>

        <Grid
          item
          xs
          container
          justify="flex-start"
          alignItems="flex-start"
          direction="column"
        >
          <Fade zoom>
            <h1 id="exp-paragraph">{this.props.description}</h1>

            <p className="exp-bullets">
              {this.props.bullets.map(x => {
                return (
                  <Fragment key={x}>
                    <strong style={{ color: "#19c8fd" }}>•</strong> &nbsp;
                    {x} <br />
                  </Fragment>
                );
              })}
            </p>
          </Fade>
        </Grid>
      </Grid>
    );
  }
}
