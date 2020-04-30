import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../components/image';
import SEO from '../components/seo';
import '../assets/css/home.css';
const home = () => {
  return (
    <>
    <SEO title="Home" />
    <div>
    <Grid container spacing={3}>
    <Grid item md={6}xs={12}>
    <div class="intro_tag">
    <p class="intro_tag_text">Hi ! </p>
    <p class="intro_tag_text">I am <b>Narendra</b> </p>
    <p>Full Stack Engineer | Product Strategiest </p>
    </div>


    </Grid>
    <Grid item md={6}xs={12}>
    <Image  />
    </Grid>
    </Grid>
    </div>



    </>
  );
}

export default home;
