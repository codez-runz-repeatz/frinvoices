import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import { InvoiceStack } from './navigation'
import { fetchInvoicesFromAPI } from './actions/invoice'
import configStore from './configStore'
import { inTray as intrayData } from './data/invoices'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getInvoices();
  }
  render() {
    return (
        <View style={styles.container}>
          <InvoiceStack screenProps={this.props.invoices}/>
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
  mapDispatchToProps
)(App)