/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { signout } from "../../store/actions"

export const SignIn = () => (
    <button sx={{
        ml: "15px",
        borderRadius: "10px",
        height: "40px",
        width: "100px",
        textAlign: "center",
        backgroundColor: "primary",
        border: "2px solid #ffffff"
    }}>
        <Link to="../../signin"
            sx={{
                color: "#ffffff",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "20px"
            }}>
                Sign in
            </Link>
    </button>
)

 const Button = ({ isUserSignedIn, signout }) => {
    console.log("SignOut, isUserSignedIn :" + isUserSignedIn)
    return (
        <button sx={{
            ml: "15px",
            borderRadius: "10px",
            height: "40px",
            width: "100px",
            textAlign: "center",
            backgroundColor: "primary",
            border: "2px solid #ffffff"
        }}>
            <Link to="/"
                onClick={signout}
                sx={{
                    color: "#ffffff",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: "20px"
                }}>
                    Sign out
                </Link>
        </button>
    )
}

Button.propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    signout: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return { isUserSignedIn: state.isUserSignedIn }
}

export const SignOut = connect(mapStateToProps, { signout })(Button)

export const SignUp = () => (
    <button sx={{
        ml: "15px",
        borderRadius: "10px",
        height: "40px",
        width: "100px",
        textAlign: "center",
        mr: "20px",
        backgroundColor: "#ffffff",
        textDecorationColor: "#000000"
    }}>
        <Link to="../../signup"
            sx={{
                color: "#000000",
                textDecoration: "none",
                cursor: "pointer",
                fontSize: "20px"
            }}>
                Sign up
            </Link>
    </button>
)