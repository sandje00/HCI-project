import { 
    SIGNIN, 
    SIGNOUT,
    ADD_TO_CART } from "./types"

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

export const addToCart = (tutorial, cart) => {
    cart.push(tutorial)
    return ({
        type: ADD_TO_CART,
        payload: cart
    })
}
