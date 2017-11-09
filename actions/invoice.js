import { FETCHING_INVOICES, FETCHING_INVOICES_SUCCESS, FETCHING_INVOICES_FAILURE } from './constants'

export function fetchInvoicesFromAPI() {
  return (dispatch) => {
    dispatch(getInvoices())
    fetch('http://localhost:3000/invoices/')
    .then(data => data.json())
    .then(json => {
      console.log('json:', json)
      dispatch(getInvoiceSuccess(json))
    })
    .catch(err => dispatch(getInvocieFailure(err)))
  }
}

export function getInvoices() {
  return {
    type: FETCHING_INVOICES
  }
}

export function getInvoiceSuccess(data) {
  return {
    type: FETCHING_INVOICES_SUCCESS,
    data,
  }
}

export function getInvocieFailure() {
  return {
    type: FETCHING_INVOICES_FAILURE
  }
}
