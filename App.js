import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { InvoiceStack } from './navigation'

export default class edit extends React.Component {
  render() {
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