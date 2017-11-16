// reducers/index.js

import { combineReducers } from 'redux'
import invoices from './invoice'
import companies from './company'

const rootReducer = combineReducers({
    invoices,
    companies
});

export default rootReducer