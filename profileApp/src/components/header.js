import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../components/header.css';

const Header = ({ siteTitle }) => (
  <header class="flex-container">

      <div>
<h1>
{siteTitle}
</h1>


      </div>
      <div>

      </div>
      <div>

      <Link class="header-link"
      to="/"

    >
    Projects
    </Link>
      <Link
      to="/"

    >
    Expereince
    </Link>
      <Link
      to="/"

    >
    Skills
    </Link>
      <Link
      to="/"

    >
    Achivements
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
