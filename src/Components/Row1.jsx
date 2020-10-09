import React, { Component } from 'react';
import { Grid, Container } from '@material-ui/core';
import './styles.css';
import ProjectCard from './ProjectCard';
import { Fade } from 'react-reveal';
import Quote from './Quote';

export default class Row1 extends Component {
  render() {
    return (
      <Grid container justify="center" alignItems="flex-start" spacing={6}>
        <ProjectCard
          src="https://cdn.shopify.com/s/files/1/2723/6790/collections/Large_Website_CROPPED-8158_c27a7da0-a6e5-43ea-93b6-f87a33505287_2048x.jpg?v=1515986208"
          title="TEMPORARY PLACEHOLDER"
          description="asdasd"
          width="90%"
        />
        <ProjectCard
          src={require('../Assets/social_cropped.mp4')}
          title="IOS/ANDROID SOCIAL MEDIA APP"
          width="40vh"
          phone
          description="This is a social media app similar to Instagram,
           which was made with React Native & Firebase."
          video
        />

        <Quote text='"Imagination is more important than knowledge...' />
      </Grid>
    );
  }
}
