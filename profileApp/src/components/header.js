import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {styles} from '../components/header.css';

const Header = ({ siteTitle }) => (
  <header class="flex-container">

      <div>
<h3>
@santynaren
</h3>


      </div>
      <div>
      </div>
      <div>



      <Link style={{textDecoration :'none'}} to="/">
      <span class="header-link">  Contact</span>
    </Link>
      <Link  style={{textDecoration :'none'}} to="/">
      <span  class="header-link">  Download </span>
    </Link>



      </div>


  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
