import React from 'react';
import Grid from '@material-ui/core/Grid';
import Image from '../components/image';
import SEO from '../components/seo';
import '../assets/css/work.css';
import { Link } from "gatsby";
import nextLogo from '../images/know_more.png'
const awards = () => {
  // console.log(this.props);
  return (
    <>
<div>
<Grid container spacing={3}>

<Grid item md={4}xs={12}>
<div class="card">
<div class="cardContent">
<div class="cardTitle">
Best Innovative Product
</div>
<div class="cardBody">
Feliciated  by Department of Science and Technology , Govt Of India
</div>
<span class="cardTags">#2018</span>

</div>
<div class="next">


</div>
</div>

</Grid>
<Grid item md={4}xs={12}>
<div class="card">
<div class="cardContent">
<div class="cardTitle">
Won National Level Innothon
</div>
<div class="cardBody">
Recognised by Inidia Smart Grid Forum , New Delhi
</div>
<span class="cardTags">#2017</span>

</div>
<div class="next">


</div>
</div>

</Grid>
<Grid item md={4}xs={12}>
<div class="card">
<div class="cardContent">
<div class="cardTitle">
Finalist - 108 Ambulance Application
</div>
<div class="cardBody">
Conducted by Govt of TN
</div>
<span class="cardTags">#2018</span>

</div>
<div class="next">


</div>
</div>

</Grid>


</Grid>
<Grid container spacing={3}>
<Grid item md={2}xs={4}>
<div class="cardCount">
<div class="cardContentCount">
<div class="cardTitleCount">
10+
</div>
<div class="cardBodyCount">
Event Speaker
</div>


</div>

</div>

</Grid>
<Grid item md={2}xs={4}>
<div class="cardCount">
<div class="cardContentCount">
<div class="cardTitleCount">
42+
</div>
<div class="cardBodyCount">
Events Attended
</div>


</div>

</div>

</Grid>
<Grid item md={2}xs={4}>
<div class="cardCount">
<div class="cardContentCount">
<div class="cardTitleCount">
15+
</div>
<div class="cardBodyCount">
Awards & Honor
</div>


</div>

</div>

</Grid>
<Grid item md={2}xs={4}>
<div class="cardCount">
<div class="cardContentCount">
<div class="cardTitleCount">
100+
</div>
<div class="cardBodyCount">
Contacts Built
</div>


</div>

</div>

</Grid>
<Grid item md={2}xs={4}>
<div class="cardCount">
<div class="cardContentCount">
<div class="cardTitleCount">
25+
</div>
<div class="cardBodyCount">
Projects Developed
</div>


</div>

</div>

</Grid>
<Grid item md={2}xs={4}>
<div class="cardCount">
<div class="cardContentCount">
<div class="cardTitleCount">
47+
</div>
<div class="cardBodyCount">
Failures
</div>


</div>

</div>

</Grid>

</Grid>
</div>



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
export default awards;
