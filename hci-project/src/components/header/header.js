import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SignedIn from "./signedin"
import NotSignedIn from "./notsignedin"
import headerStyles from "./header.module.css"

const isUserSignedIn = false; //temporary

const Header = ({ menuLinks }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.navdiv}>
      <span className={headerStyles.link}>Logo</span> {/* temporary */}
      <div>
          <nav>
            <ul className={headerStyles.navbar}>
              {menuLinks.map(({name, path}) => (
                <li
                  key={name}
                  className={headerStyles.navlinks}
                >
                  <Link 
                    className={headerStyles.link}
                    activeClassName={headerStyles.active}
                    to={path}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {isUserSignedIn ? (
          <SignedIn />
        ) : (
          <NotSignedIn />
        )}
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
