import React from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, ListView, TouchableOpacity, Platform } from 'react-native';
import { CompanyItem } from '../../components_lib/CompanyItem';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { SearchBar } from 'react-native-elements'

import { ICON_SIZE, EICON_SIZE } from '../../basics/icons';

export default class CompanyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {companies: []};
  }
  handleRowPress = (item) => {
    this.props.navigation.navigate('InTray', item);
  }
  search = (searchText) => {
    searchText = searchText.toLowerCase();
    this.setState({
      invoices: this.props.screenProps.companies.filter(company => company.name.desc.toLowerCase().indexOf(searchText)>=0)
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({invoices: nextProps.screenProps.companies});
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleLabel}>All Companies</Text>
        </View>

        <View style={styles.searchContainer}>
          <SearchBar
            lightTheme
            onChangeText={this.search}
            placeholder='Type Here...' />
        </View>

        <FlatList
          data={this.state.companies}
          renderItem={({ item }) => <MyobItem component={item} onPress={() => this.handleRowPress(item)} />}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.footerInfo}>

        </View>
      </View>
    );
  }
};