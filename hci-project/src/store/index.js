import { createStore as reduxCreateStore } from "redux"

import reducer from "./reducers"

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore