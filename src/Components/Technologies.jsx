import React, { Component } from "react";
import { Grid, Container } from "@material-ui/core";
import "./styles.css";
import { Fade } from "react-reveal";
import VisibilitySensor from "react-visibility-sensor";
import SingleTech from "./SingleTech";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import LocalFloristOutlinedIcon from "@material-ui/icons/LocalFloristOutlined";
import MemoryOutlinedIcon from "@material-ui/icons/MemoryOutlined";
export default class Technologies extends Component {
  render() {
    return (
      <Grid
        container
        alignItems="center"
        style={{ height: "120vh", width: "100vw" }}
      >
        <Grid container justify="center" direction="column" alignItems="center">
          <Fade>
            <h1 id="title" style={{ textAlign: "center" }}>
              SKILLS & TECHNOLOGIES
            </h1>
            <hr style={{ width: "30%", color: "white" }} />
          </Fade>
          <Fade delay={2700}>
            <h1
              id="exp-paragraph"
              style={{ textAlign: "center", width: "40vw" }}
            >
              What kind of programer am I? I have made several websites using
              ReactJS which incorporates HTML, CSS, and Javascript. I built REST
              APIs at Boeing and utilized the cloud to scale deployment. Right
              now I am an undergraduate reseacher in computer vision applying
              the latest techniques such as YOLO object detection. I am also
              using machine learning to detect unsafe driving. To answer the
              question, I am a Data Scientist, with an emphasis on fullstack
              development and computer vision.
            </h1>
          </Fade>
          <Container>
            <Grid
              container
              justify="space-evenly"
              style={{ marginTop: "4%" }}
              alignItems="center"
              spacing={5}
            >
              <SingleTech
                title="FRONT-END"
                list={["ReactJS", "HTML", "CSS", "Android"]}
                svg={LocalFloristOutlinedIcon}
                color="#61dbfb"
                delay={0}
              />
              <SingleTech
                title="BACK-END"
                list={["ExpressJS", "Firebase", "MongoDB", "AWS"]}
                color="purple"
                svg={MemoryOutlinedIcon}
                delay={400}
              />
              <SingleTech
                title="DATA SCIENCE / VISION"
                list={["Tensorflow", "Scikit Learn", "CV2", "Keras"]}
                color="#ff450c"
                svg={VisibilityOutlinedIcon}
                delay={800}
              />
            </Grid>
          </Container>
        </Grid>
      </Grid>
    );
  }
}
