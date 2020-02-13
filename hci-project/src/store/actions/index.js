import { SIGNIN, SIGNOUT } from "./types"

export const signin = () => {
    return ({
        type: SIGNIN
    })
}

export const signout = () => {
    return ({
        type: SIGNOUT
    })
}
