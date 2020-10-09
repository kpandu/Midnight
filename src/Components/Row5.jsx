import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Quote from './Quote';
import './styles.css';

export default class Row5 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start">
        <ProjectCard
          src={require('../Assets/sol3video.mp4')}
          title="SOL"
          width="100%"
          video
          description="I was blinded by thinking that overly flashy looks good. Before I 
          realized that I was wrong, I made the above graphic which was going to be the at the very top of this
          website. It is a real-time interactive 3D animation in space made with BabylonJS. Project Midnight is a nice
           balance between flashy and simple."
        />

        <Quote text="...while imagination embraces the entire world..." />
      </Grid>
    );
  }
}
