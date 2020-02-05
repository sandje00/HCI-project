import React from "react"

import Layout from "../../components/layout"
import SignUpForm from "../../components/forms/sign-up-form"
import ReduxTest from "../../components/redux-test"

const SignUp = () => (
  <Layout>
    <h1>Sign up</h1>
    <SignUpForm />
    <ReduxTest />
  </Layout>
)

export default SignUp