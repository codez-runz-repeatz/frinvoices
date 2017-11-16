import React from 'react';
import { connect } from 'react-redux';
import { Provider } from 'react-redux'
import { StyleSheet, View } from 'react-native';
import { InvoiceStack } from './navigation'
import { fetchInvoicesFromAPI } from './actions/invoice'
import { fetchCompaniesFromAPI } from './actions/company'
import configStore from './configStore'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getCompanies();
  }
  render() {
    return (
        <View style={styles.container}>
          <InvoiceStack screenProps={this.props.companies}/>
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
    companies: state.companies
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getCompanies: () => dispatch(fetchCompaniesFromAPI())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)