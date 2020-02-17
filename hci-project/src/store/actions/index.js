import { 
    SIGNIN, 
    SIGNOUT,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    BOOKMARK,
    UNBOOKMARK,
    GET_TOTAL,
    EMPTY_CART } from "./types"

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

export const unbookmark = (id, bookmarks) => {
    bookmarks = bookmarks.filter(i => i.id !== id)
    return ({
        type: UNBOOKMARK,
        payload: bookmarks
    })
}

export const getTotal = (total, cart) => {
    total = cart.reduce((r, d) => r + parseFloat(d.price), 0.00)
    return ({
        type: GET_TOTAL,
        payload: total
    })
}

export const emptyCart = () => {
    return ({
        type: EMPTY_CART,
        payload: []
    })
}
