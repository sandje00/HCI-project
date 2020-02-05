/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"

const SignInForm = () => {
    return (
        <Flex>
            <Box />
            <Box sx={{ flex: "1" }}>
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
                        <span sx={{ mr: "15px" }}>Password:</span>
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
            </Box>
            <Box />
        </Flex>
    )
}

export default SignInForm