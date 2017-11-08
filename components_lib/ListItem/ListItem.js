import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../helpers/string';
import colors from '../config/colors';

const ListItem = ({ invoice, onPress }) => {
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  const name = `${capitalizeFirstLetter(invoice.name.first)} ${capitalizeFirstLetter(invoice.name.last)}`;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <Image
          style={styles.avatar}
          source={{ uri: invoice.picture.thumbnail }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{invoice.email}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name={iconName}
            size={CHEVRON_SIZE}
            style={styles.icon_grey}
            color={colors.subtleText}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

ListItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func,
};

export default ListItem;