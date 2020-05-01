import React from 'React';
import Grid from '@material-ui/core/Grid';
import Home from '../assets/css/home.css';
import Layout from '../components/layout';
import log from "../images/pedaleze.jpeg";
export default function workExplainPage({data}){
    const works = data.markdownRemark

    return(
        <Layout>

        <div class="intro_tag">
        <Grid container spacing={3}>
        <Grid item md={6} xs={12}>
        <p class="intro_tag_text"> {works.frontmatter.title}</p>
        <div dangerouslySetInnerHTML={{__html:works.html}}/>
        </Grid>
        <Grid item md={6} xs={12}>
        <div class="wCard">
<div class="wCardContent">
<img style={{width:180,height:360}}src={log}/>
</div>
        </div>
        </Grid>


        </Grid>




</div>
</Layout>
    )
}


export const postQuery = graphql`
    query EachWork($path : String!){
markdownRemark(frontmatter:{path:{eq:$path}}){
html
frontmatter{
path
title
tags
short
}
}
    }
`
