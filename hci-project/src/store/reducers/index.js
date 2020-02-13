import { SIGNIN, SIGNOUT } from "../actions/types"

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
  return state
}

export default reducer
