import React from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, ListView, TouchableOpacity, Platform } from 'react-native';
import { inTray } from '../../data/invoices';
import { MyobItem } from '../../components_lib/MyobItem';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { SearchBar } from 'react-native-elements'
import { ICON_SIZE, EICON_SIZE } from '../../basics/icons';

export default class InTray extends React.Component {
  constructor(props) {
    super(props);
    this.state = {invoices: []};
  }
  handleRowPress = (item) => {
    this.props.navigation.navigate('InTrayEdit', item);
  }
  search = (searchText) => {
    searchText = searchText.toLowerCase();
    this.setState({
      invoices: this.props.screenProps.invoices.filter(invoice => invoice.core.customer.desc.toLowerCase().indexOf(searchText)>=0)
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({invoices: nextProps.screenProps.invoices});
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleLabel}>All Inboxes</Text>
        </View>

        <View style={styles.searchContainer}>
          <SearchBar
            lightTheme
            onChangeText={this.search}
            placeholder='Type Here...' />
        </View>

        <FlatList
          data={this.state.invoices}
          renderItem={({ item }) => <MyobItem component={item} onPress={() => this.handleRowPress(item)} />}
          keyExtractor={(item) => item.id}
        />

        <View style={styles.footerInfo}>

          <Icon
            name='md-funnel'
            size={ICON_SIZE}
            style={styles.footerInfo}
          />

          <View style={styles.footerLabel}>
            <Text style={styles.filterLabel}>Filtered By</Text>
            <Text style={styles.filterQuery}>Unpaid Invoices</Text>
          </View>

          <Icon
            name='ios-add'
            size={EICON_SIZE}
            style={styles.footerInfo}
          />
        </View>
      </View>
    );
  }
};