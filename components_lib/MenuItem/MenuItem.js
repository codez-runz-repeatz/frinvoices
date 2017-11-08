import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE } from './styles';
import { capitalizeFirstLetter } from '../helpers/string';
import colors from '../config/colors';

const MenuItem = ({ component, onPress }) => {
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  const name = `${component.desc}`;
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={colors.rowUnderlay}
    >
      <View style={styles.row}>
        <View>
          <Text style={styles.name}>{component.ref}</Text>
          <Text style={styles.email}>{component.name}</Text>
        </View>
        <View style={styles.chevronContainer}>
          <Icon
            name={iconName}
            size={CHEVRON_SIZE}
            style={styles.chevron}
            color={colors.subtleText}
          />
        </View>
      </View>
    </TouchableHighlight>
  );
};

MenuItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func,
};

export default MenuItem;