import { 
    SIGNIN, 
    SIGNOUT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    BOOKMARK } from "./types"

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

export const removeFromCart = (id, cart) => {
    cart = cart.filter(i => i.id !== id)
    return ({
        type: REMOVE_FROM_CART,
        payload: cart
    })
}

export const bookmark = (tutorial, bookmarks) => {
    bookmarks.push(tutorial)
    return ({
        type: BOOKMARK,
        payload: bookmarks
    })
}
