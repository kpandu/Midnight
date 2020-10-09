import { Grid } from '@material-ui/core';
import React, { Component } from 'react';
import { Fade } from 'react-reveal';
import ProjectCard from './ProjectCard';
import './styles.css';

export default class Row7 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src={require('../Assets/panorama.png')}
          title="PANORAMA STICHER"
          width="100%"
          description="Using RANSAC on the potential candidates from Harris corner detection,
           the best matches are found between the 2 images to be stitched.
            Then the transformation between the 2 images is computed which is used
             to transform and stich all pixels from the left image to the right image.
          "
        />
      </Grid>
    );
  }
}
