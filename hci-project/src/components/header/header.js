/** @jsx jsx */

import PropTypes from "prop-types"
import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"
import { useWindowWidth } from '@react-hook/window-size'

import Desktop from "./desktop"
import Mobile from "./mobile"
import logo from "../../assets/logo.png"

const LogoLink = () => (
  <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
    <img
      src={logo}
      sx={{
        height: "50px",
        width: "177px",
        mt: "5px",
        ml: "10px"
      }}
    />
  </Link>
)

const Header = ({ menuLinks }) => {
  let width = useWindowWidth()

  return (
    <header sx={{
      zIndex: "10",
      height: "70px",
      backgroundColor: "primary",
      mb: "1.45rem",
      position: "fixed",
      top: "0",
      width: "100%"
    }}>
      <Flex sx={{
        margin: "0 auto",
        maxWidth: "960",
        height: "70px",
        justifyContent: "space-between",
        alignContent: "center",
        flexDirection: "row"
      }}>
        <Box sx={{ flexGrow: "1" }}>
          <LogoLink />
        </Box>
        <Box sx={{ flexGrow: "2" }}>
          {width > 576 ? (
            <Desktop menuLinks={menuLinks} />
          ) : (
            <Mobile menuLinks={menuLinks} />
          )}
        </Box>
      </Flex>
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
