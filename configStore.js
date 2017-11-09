// configStore.js

import { createStore } from 'redux'
import rootReducer from './reducers'

export default function configtore() {
  let store = createStore(rootReducer)
  return store
}