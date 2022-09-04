import { legacy_createStore as createStore } from 'redux'
import reducer from '../reducer/taskreducer'
const store = createStore(reducer, [])

export default store
