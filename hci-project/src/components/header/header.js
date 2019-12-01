import PropTypes from "prop-types"
import React from "react"
import { useWindowWidth } from '@react-hook/window-size'

import Desktop from "./desktop"
import Mobile from "./mobile"
import headerStyles from "../../styles/header.module.css"


const Header = ({ menuLinks }) => {
  let width = useWindowWidth()

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.navdiv}>
        <span className={headerStyles.link}>Logo</span> {/* temporary */}
        {width > 576 ? (
          <Desktop menuLinks={menuLinks} />
        ) : (
          <Mobile menuLinks={menuLinks} />
        )}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
