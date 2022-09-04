import { combineReducers } from 'redux'
import reducer from './taskreducer'
import loginReducer from './loginReducer'

export default combineReducers({
  reducer,
  loginReducer,
})
