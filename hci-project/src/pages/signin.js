/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"

import SEO from "../components/seo"
import LogoLink from "../components/logo-link"
import SignInForm from "../components/forms/sign-in-form"

const SignIn = () => (
  <div sx={{ margin: "0 auto" }}>
    <SEO title="Sign in"/>
    <Link to="/"
      sx={{
        textDecoration: "none",
        color: "#000000",
        padding: "10px",
        backgroundColor: "secondary",
        ml: "20px",
        ":hover": {
          color: "accent",
          textDecoration: "underline"
        }
      }}
    >
      Back to Home
    </Link>
    <Flex sx={{
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      mt: "50px"
    }}>
      <Box sx={{ mb: "30px" }}>
        <LogoLink />
      </Box>
      <Box sx={{ mb: "60px" }}>
        <span sx={{ fontSize: "2em" }}>Sign in to <b>how2</b></span>
      </Box>
      <Box>
        <SignInForm />
      </Box>
      <Box sx={{ mt: "60px" }}>
        <p>
          New to how2? <Link to="./signup">Create an account</Link>.
        </p>
      </Box>
    </Flex>
  </div>
)

export default SignIn