import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../components/image';
import SEO from '../components/seo';
import '../assets/css/profile.css';
const profile = () => {
  return (
    <>

    <div>
    <Grid container spacing={3}>

     <Grid item md={6}xs={12}>
        <Grid item md={3}xs={4}>
        <div class="card">
        <div class="cardContent">
        <div class="cardTitle">
             A
        </div>

                 </div>
                </div>

                </Grid>
        <Grid item md={3}xs={4}>
        <div class="card">
        <div class="cardContent">
     <div class="cardTitle">
         A
     </div>

        </div>
        </div>

    </Grid>
    <Grid item md={3}xs={4}>
    <div class="card">
    <div class="cardContent">
    <div class="cardTitle">
   A
    </div>

    </div>
    </div>

    </Grid>
    <Grid item md={3}xs={4}>
    <div class="card">
    <div class="cardContent">
    <div class="cardTitle">
   A
    </div>

    </div>
    </div>

    </Grid>
    </Grid>
    <Grid item md={6}xs={12}>


    </Grid>
    </Grid>



    </div>



    </>
  );
}

export default profile;
