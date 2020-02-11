/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"
import { Link } from "gatsby"

import SEO from "../components/seo"
import LogoLink from "../components/logo-link"
import SignUpForm from "../components/forms/sign-up-form"

const SignUp = () => (
  <div sx={{ margin: "0 auto" }}>
    <SEO title="Sign up"/>
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
        <span sx={{ fontSize: "2em" }}>Create your account</span>
      </Box>
      <Box>
        <SignUpForm />
      </Box>
      <Box sx={{ mt: "60px" }}>
        <p>
          Already have an account? <Link to="./signin">Sign in</Link>.
        </p>
      </Box>
    </Flex>
  </div>
)

export default SignUp
