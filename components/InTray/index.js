import React from 'react';
import { TextInput, StyleSheet, Text, View, FlatList, ListView, TouchableOpacity, Platform } from 'react-native';
import { inTray } from '../../data/invoices';
import { MyobItem } from '../../components_lib/MyobItem';

import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

import { SearchBar } from 'react-native-elements'


import { ICON_SIZE, EICON_SIZE } from '../../basics/icons';

export const dataSource = () => {
  return props.invoices;
};


export default class InTray extends React.Component {

  handleRowPress = (item) => {
    this.props.navigation.navigate('InTrayEdit', item)
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
            onChangeText={dataSource}
            placeholder='Type Here...' />
        </View>

        <FlatList
          data={props.invoices}
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