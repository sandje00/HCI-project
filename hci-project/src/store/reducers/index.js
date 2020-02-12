import { SIGNIN } from "../actions/types"

const signin = (state, action) => {
  if (action.type === SIGNIN) {
    return Object.assign({}, state, {
      isUserSignedIn: true
    })
  }
  return state
}

export default signin
