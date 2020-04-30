import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Home from '../components/home';
import Work from '../components/works';
import Profile from '../components/profile';







import CardContent from '@material-ui/core/CardContent';



const IndexPage = () => (
  <Layout>

   <Home/>
   <Profile/>
<Work/>
  </Layout>
)

export default IndexPage
