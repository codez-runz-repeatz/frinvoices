import { FETCHING_COMPANIES, FETCHING_COMPANIES_SUCCESS, FETCHING_COMPANIES_FAILURE } from '../constants'
const initialState = {
  companies: [],
  isFetching: false,
  error: false
}

export default function companyReducer (state = initialState, action) {
  switch (action.type) {
    case FETCHING_COMPANIES:
      return {
        ...state,
        companies: [],
        isFetching: true
      }
    case FETCHING_COMPANIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        companies: action.data
      }
    case FETCHING_COMPANIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}