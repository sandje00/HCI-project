import { createStore as reduxCreateStore } from "redux"

import reducer from "./reducers"

const initialState = { 
    isUserSignedIn: false,
    cart: []
}

const createStore = () => reduxCreateStore(reducer, initialState)

export default createStore
