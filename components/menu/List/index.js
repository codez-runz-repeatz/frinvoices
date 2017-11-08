import React from 'react';
import { StyleSheet, Text, View, FlatList,ListView } from 'react-native';
import { components } from '../../../data/menu';
import { MenuItem } from '../../../components_lib/MenuItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default class componentMenu extends React.Component {
handleRowPress = (item) => {
  this.props.navigation.navigate('EditInvoice', item)
}

  render() {
    return (
      <View>
        <FlatList
          data={components}
          renderItem={({item}) => 
          <MenuItem component={item} onPress={() => this.handleRowPress(item)} />}
          keyExtractor={(item) => item.uid}
        />
      </View>
    );
  }
};