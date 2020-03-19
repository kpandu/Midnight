import { Container, Grid } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import React from "react";
import TrackVisibility from "react-on-screen";
import { Spring } from "react-spring/renderprops";
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
                    width: "120vw",
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
              <h1 id="title">EVENTUALLY MIDNIGHT COMES TO AN END...</h1>
            </Grid>
          </Grid>

          <Grid
            container
            style={{ marginTop: "5%", marginLeft: "0%" }}
            justify="flex-end"
            alignItems="flex-end"
            direction="column"
          >
            <Grid item container direction="column" xs={6}>
              <h1 id="contact-description">
                Midnight is when the line <br />
                between imagination and innovation is blurred.
                <br />I also wrote this site at midnight.
                <br /> <br />
                Made with ReactJS.
                <br /> <br />
                Krishan Panduwawala
              </h1>
              <Grid container style={{ marginTop: "20px" }}>
                <img
                  src={require("../Assets/github.svg")}
                  color="black"
                  width="35"
                  height="35"
                  className="link"
                  onClick={() =>
                    window.location.assign("https://github.com/kpandu")
                  }
                ></img>
                <img
                  src={require("../Assets/linkedin.svg")}
                  color="black"
                  className="link"
                  onClick={() =>
                    window.location.assign(
                      "https://www.linkedin.com/in/krishan-panduwawala-ba9749185/"
                    )
                  }
                ></img>

                <EmailIcon
                  src={require("../Assets/linkedin.svg")}
                  className="link"
                  style={{ fontSize: 35.5 }}
                  onClick={() =>
                    (window.location.href = "mailto:krishan103@hotmail.com")
                  }
                ></EmailIcon>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </div>
  );
}
