import { FETCHING_COMPANIES, FETCHING_COMPANIES_SUCCESS, FETCHING_COMPANIES_FAILURE } from '../constants'

export function fetchCompaniesFromAPI() {
  return (dispatch) => {
    dispatch(getCompanies())
    fetch('http://10.63.40.146:3000/companies/')
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      dispatch(getCompanySuccess(json))
    })
    .catch(err => dispatch(getInvocieFailure(err)))
  }
}

export function getCompanies() {
  return {
    type: FETCHING_COMPANIES
  }
}

export function getCompanySuccess(data) {
  return {
    type: FETCHING_COMPANIES_SUCCESS,
    data,
  }
}

export function getInvocieFailure() {
  return {
    type: FETCHING_COMPANIES_FAILURE
  }
}
