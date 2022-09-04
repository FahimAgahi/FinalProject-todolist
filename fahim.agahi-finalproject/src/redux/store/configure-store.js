import { legacy_createStore as createStore } from 'redux'
import combineReducers from '../reducer/reducers'
const store = createStore(combineReducers, {})

export default store
