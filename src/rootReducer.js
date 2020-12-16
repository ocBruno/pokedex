import { combineReducers } from 'redux'

import {
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer,
} from './reducers'

// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer,
})

export default rootReducer
