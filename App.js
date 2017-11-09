import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { InvoiceStack } from './navigation'
import { fetchInvoicesFromAPI } from './actions/invoices'

export default class edit extends React.Component {
  render() {
    const { invoices, isFetching } = props.invoices;
    return (
        <View style={styles.container}>
          <InvoiceStack />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:50,
    flexDirection: 'column',
  },
});

function mapStateToProps (state) {
  return {
    invoices: state.invoices
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getInvoices: () => dispatch(fetchInvoicesFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)