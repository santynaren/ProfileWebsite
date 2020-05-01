import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout";
import Home from '../components/home';
import Work from '../components/works';
import Profile from '../components/profile';

import Grid from '@material-ui/core/Grid';





import CardContent from '@material-ui/core/CardContent';



const IndexPage = ({data}) => (
  <Layout>

   <Home/>
   <Profile/>
   <div style={{marginTop:50}}>
   <Grid container spacing={3}>

   <Grid item md={12}xs={12}>
   <span class="header_works">My works !</span>

   </Grid>

   </Grid>
   <Grid container spacing={3}>
{data.allMarkdownRemark.edges.map(work =>(
  <Work key={work.node.id} title={work.node.frontmatter.title} body={work.node.excerpt} tag={work.node.frontmatter.tags} href={work.node.frontmatter.path}/>
  ))}
  </Grid>
  </div>

  </Layout>
)
export const worksQuery = graphql`
query workDoneQuery {
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          path
          title
          tags
        },
        excerpt
      }
    }
  }
}
`
export default IndexPage
