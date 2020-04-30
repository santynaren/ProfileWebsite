import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>My Works </h1>
    <p>Expereince | Projects | Skills | Achievements </p>
    <p>@santynaren</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
     <Image />
     </div>
    <Link to="/experince/">Expereince</Link>
    <Link to="/projects/">Project</Link>
    <Link to="/skills/">Skills</Link>
  </Layout>
)

export default IndexPage
