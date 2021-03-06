import { createStore as reduxCreateStore } from "redux"

import reducer from "./reducers"

const initialState = { 
    isUserSignedIn: false,
    cart: [],
    bookmarks: [],
    total: 0.00
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
