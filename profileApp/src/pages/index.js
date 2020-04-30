<<<<<<< HEAD
import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Home from '../components/home';
import Work from '../components/works';
import Profile from '../components/profile';






=======
import React from "react"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"
>>>>>>> fcfa0a0e9a168a48d8edf242be15d677d68fe735

import CardContent from '@material-ui/core/CardContent';



const IndexPage = () => (
  <Layout>

<<<<<<< HEAD
   <Home/>
   <Profile/>
<Work/>
=======
    <SEO title="Home" />
<div>
<Grid container spacing={3}>
<Grid item md={6}xs={12}>
<h1>Hi</h1>
<h1>I am Narendra !</h1>
</Grid>
<Grid item md={6}xs={12}>

</Grid>
</Grid>
</div>






>>>>>>> fcfa0a0e9a168a48d8edf242be15d677d68fe735
  </Layout>
)

export default IndexPage
