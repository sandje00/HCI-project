/** @jsx jsx */

import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { navigate } from "@reach/router"

import { signin } from "../../store/actions"

const Submit = ({ isUserSignedIn, signin }) => {
    console.log("isUserSignedIn: " + isUserSignedIn)

    const handleSubmit = () => {
        signin()
        navigate("/")
    }

    return (
        <button 
            onClick={handleSubmit}
            sx={{
                backgroundColor: "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "50px",
                width: "150px",
                textAlign: "center",
                textColor: "#000000",
                cursor: "pointer",
                fontSize: "1.2em",
                ml: ["100px", "120px", "120px"],
                mt: "30px"
        }}>
            Submit
        </button>
    )
}

Submit.propTypes = {
    isUserSignedIn: PropTypes.bool.isRequired,
    signin: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return { isUserSignedIn: state.isUserSignedIn }
}

export default connect(mapStateToProps, { signin })(Submit)
