import { FETCHING_INVOICES, FETCHING_INVOICES_SUCCESS, FETCHING_INVOICES_FAILURE } from '../constants'

export function fetchInvoicesFromAPI(companyId) {
  
  return (dispatch) => {
    dispatch(getInvoices())
    fetch('http://10.63.40.146:3000/invoices/')
    .then(data => data.json())
    .then(invoices => {
      dispatch(getInvoiceSuccess(invoices.filter(invoice => invoice.companyId==companyId)))
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
