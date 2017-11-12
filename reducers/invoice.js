import { FETCHING_INVOICES, FETCHING_INVOICES_SUCCESS, FETCHING_INVOICES_FAILURE } from '../constants'
const initialState = {
  invoices: [],
  isFetching: false,
  error: false
}

export default function invoiceReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_INVOICES:
      return {
        ...state,
        invoices: [],
        isFetching: true
      }
    case FETCHING_INVOICES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        invoices: action.data
      }
    case FETCHING_INVOICES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}