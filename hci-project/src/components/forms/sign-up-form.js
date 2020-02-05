/** @jsx jsx */

import { jsx } from "theme-ui"

const SignUpForm = () => {
    return (
        <div>
            <form sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start"
            }}>
                <label sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "400px",
                    mb: "20px"
                }}>
                    <span sx={{ mr: "15px" }}>Username:</span>
                    <input type="text"/>
                </label>
                <label sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "400px",
                    mb: "20px"
                }}>
                    <span sx={{ mr: "15px" }}>Email:</span>
                    <input type="email"/>
                </label>
                <label sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "400px",
                    mb: "20px"
                }}>
                    <span sx={{ mr: "15px" }}>Password:</span>
                    <input type="password"/>
                </label>
                <label sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    width: "400px",
                    mb: "20px"
                }}>
                    <span sx={{ mr: "15px" }}>Repeat password:</span>
                    <input type="password"/>
                </label>
            </form>
            <button sx={{
                ml: "160px",
                backgroundColor: "accent",
                borderRadius: "10px",
                borderStyle: "none",
                height: "40px",
                width: "100px",
                textAlign: "center",
                textColor: "#000000",
                cursor: "pointer",
                fontSize: "20px"
            }}>
                Submit
            </button>
        </div>
    )
}

export default SignUpForm