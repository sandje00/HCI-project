import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SignUpForm from "../components/forms/sign-up-form"
import ReduxTest from "../components/redux-test"

const SignUp = () => (
  <Layout>
    <SEO title="Sign up"/>
    <h1>Sign up</h1>
    <SignUpForm />
    <ReduxTest />
  </Layout>
)

export default SignUp