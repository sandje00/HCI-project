import { 
  SIGNIN, 
  SIGNOUT,
  ADD_TO_CART,
  REMOVE_FROM_CART } from "../actions/types"

const reducer = (state, action) => {
  if (action.type === SIGNIN) {
    return Object.assign({}, state, {
      isUserSignedIn: true
    })
  }
  if (action.type === SIGNOUT) {
    return Object.assign({}, state, {
      isUserSignedIn: false
    })
  }
  if (action.type === ADD_TO_CART) {
    return Object.assign({}, state, {
      cart: action.payload
    })
  }
  if (action.type === REMOVE_FROM_CART) {
    return Object.assign({}, state, {
      cart: action.payload
    })
  }
  return state
}

export default reducer
