import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import sol2 from '../Assets/sol2video.mp4';
import ProjectCard from './ProjectCard';
import './styles.css';
export default class Row4 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src={require('../Assets/flapong.jpg')}
          title="FLAPPY BIRD / PONG"
          width="80%"
          description={`Making games may not be my specialization, yet they teach so much. 
          Through creating Flappy Bird in Java and Pong in Python, I took my first steps into both languages.`}
          center
        />
        <ProjectCard
          src={sol2}
          title="PROJECT PARALLAX"
          description="I was really interested in parallax and wanted to learn React, therefore I combined the
          2 into the site above. It built a strong foundation in states and functional/class components. The site
          features a parallax downfall from space to the bottom of the sea."
          width="100%"
          center
          video
        />
      </Grid>
    );
  }
}
