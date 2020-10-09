import React from 'react';
import { Fade } from 'react-reveal';
import { Grid } from '@material-ui/core';

function Quote({ text }) {
  return (
    <Grid item xs container justify="center" xs="12" md="6" lg="4">
      <Fade zoom duration={1600}>
        <h1 id="quote" style={{ marginBottom: '25%', marginTop: '15%' }}>
          {text}
        </h1>
      </Fade>
    </Grid>
  );
}

export default Quote;
