import React from "react"
import { Link } from "gatsby"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"
import Layout from "../components/layout"
import Image from "../components/image"

import SEO from "../components/seo"

import CardContent from '@material-ui/core/CardContent';



const IndexPage = () => (
  <Layout>

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






  </Layout>
)

export default IndexPage
