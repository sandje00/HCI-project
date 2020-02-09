/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link } from "gatsby"

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

export const SignOut = () => (
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