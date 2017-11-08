import React, { PropTypes } from 'react';
import { View, Text, Platform, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { ICON_SIZE } from './styles';


const Row = ({ label, body }) => (
  <View style={styles.actionRow}>
    <View style={styles.actionInfo}>
      <Text style={styles.actionBody}>{body}</Text>
    </View>
    
    <View style={styles.actionInfo}>
      <Text style={styles.actionBody}>{body}</Text>
    </View>

    <View style={styles.actionInfo}>
      <Text style={styles.actionBody}>{body}</Text>
    </View>

    <View style={styles.actionInfo}>
      <Text style={styles.actionBody}>{body}</Text>
    </View>

    <View style={styles.actionIcons}>
      
          <Icon
            name='ios-add'
            size={ICON_SIZE}
            style={styles.actionIcon}
          />

        
    </View>

  </View>
);

Row.propTypes = {
  label: PropTypes.string,
  body: PropTypes.string
};

export default Row;