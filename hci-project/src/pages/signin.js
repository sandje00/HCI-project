import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignInForm from "../components/forms/sign-in-form"

const SignIn = () => (
  <Layout>
    <SEO title="Sign in"/>
    <h1>Sign in</h1>
    <SignInForm />
  </Layout>
)

export default SignIn