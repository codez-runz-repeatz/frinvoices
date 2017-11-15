// reducers/index.js

import { combineReducers } from 'redux'
import invoices from './invoice'

const rootReducer = combineReducers({
    invoices
});

export default rootReducer