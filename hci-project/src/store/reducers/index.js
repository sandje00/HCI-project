import { 
  SIGNIN, 
  SIGNOUT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  BOOKMARK } from "../actions/types"

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
  if (action.type === BOOKMARK) {
    return Object.assign({}, state, {
      bookmarks: action.payload
    })
  }
  return state
}

export default reducer
