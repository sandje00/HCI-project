/** @jsx jsx */

import { jsx, Box } from "theme-ui"
import { Flex } from "@theme-ui/components"

import Submit from "./submit"

const SignUpForm = () => {
    return (
        <Flex sx={{  
            justifyContent: "center",
            flexDirection: "column"
        }}>
            <Box />
            <Box sx={{ flex: "1" }}>
                <form sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    maxWidth: "400px"
                }}>
                    <label sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        width: ["310px", "400px", "400px"]
                    }}>
                        <span sx={{ fontSize: "1.2em" }}>
                            Username <span sx={{ color: "red" }}>*</span>
                        </span>
                        <input type="text" sx={{ height: "40px" }}/>
                    </label>
                    <label sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        width: ["310px", "400px", "400px"],
                        mt: "30px"
                    }}>
                        <span sx={{ fontSize: "1.2em" }}>
                            Email address <span sx={{ color: "red" }}>*</span>
                        </span>
                        <input type="email" sx={{ height: "40px" }}/>
                    </label>
                    <label sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        width: ["310px", "400px", "400px"],
                        mt: "30px"
                    }}>
                        <span sx={{ fontSize: "1.2em" }}>
                            Password <span sx={{ color: "red" }}>*</span>
                        </span>
                        <input type="password" sx={{ height: "40px" }}/>
                    </label>
                    <label sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "left",
                        width: ["310px", "400px", "400px"],
                        mt: "30px"
                    }}>
                        <span sx={{ fontSize: "1.2em" }}>
                            Repeat password <span sx={{ color: "red" }}>*</span>
                        </span>
                        <input type="password" sx={{ height: "40px" }}/>
                    </label>
                </form>
            </Box>
            <Box>
                <Submit />
            </Box>
            <Box />
        </Flex>
    )
}

export default SignUpForm
