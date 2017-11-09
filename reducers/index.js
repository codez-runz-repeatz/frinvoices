// reducers/index.js

import { combineReducers } from 'redux'
import invoice from './invoice'

const rootReducer = combineReducers({
    invoice
});

export default rootReducer