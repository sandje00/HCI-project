/** @jsx jsx */

import { jsx } from "theme-ui"
import { Link } from "gatsby"

import icon from "../assets/icon.png"

const LogoLink = () => (
    <Link to="/" sx={{ display: "flex", alignItems: "center" }}>
        <button sx={{
            backgroundColor: "#dbdbdb",
            borderRadius: "100%",
            borderStyle: "none",
            cursor: "pointer",
            width: "100px",
            height: "100px"
        }}>
            <img
                src={icon}
                sx={{
                    height: "80px",
                    width: "80px",
                    mt: "7px"
                }}
            />
        </button>
    </Link>
)

export default LogoLink
