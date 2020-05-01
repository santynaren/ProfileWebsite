import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../components/image';
import SEO from '../components/seo';
import '../assets/css/work.css';
import { Link } from "gatsby";
import nextLogo from '../images/know_more.png'
const works = (props) => {
  // console.log(this.props);
  return (
    <>



    <Grid item md={3}xs={12}>
    <div class="card">
    <div class="cardContent">
    <div class="cardTitle">
  {props.title}
    </div>
    <div class="cardBody">
    {props.body}
    </div>
    <span class="cardTags">#{props.tag} </span>

    </div>
<div class="next">
<Link to={props.href} >
<img src = {nextLogo}/>
</Link>
</div>
    </div>

    </Grid>


    </>
  );
}
// export const worksQuery = graphql`
// query workDoneQuery {
//   allMarkdownRemark{
//     edges{
//       node{
//         id
//         frontmatter{
//           path
//           title
//           tags
//         },
//         excerpt
//       }
//     }
//   }
// }
// `
export default works;
