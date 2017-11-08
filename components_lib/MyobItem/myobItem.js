import React, { PropTypes } from 'react';
import { View, Text, Image, TouchableHighlight, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import styles, { CHEVRON_SIZE, XSMALL } from './styles';
import colors from '../config/colors';
import { iconFromStatus, colourFromStatus } from '../../components_lib/helpers/icon'

import {ICON_SIZE, EICON_SIZE} from '../../basics/icons';

const MyobItem = ({ component, onPress }) => {
  
  const iconName = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';
  
  const invoiceLineIcon = iconFromStatus('invoice');
  const myobColor = colourFromStatus('overdue')

  return (
    
    <TouchableHighlight onPress={onPress} underlayColor={colors.rowUnderlay}>
    
      <View style={styles.row}>
        
        <View style={styles.containerViewPay}>
          <Icon name={invoiceLineIcon} size={ICON_SIZE} style={styles.icon_purple}/>
          <Text></Text>
          <Text></Text>
        </View>

        <View>
        

          <Text style={styles.customer}>{component.core.customer.desc}</Text>
        
        <Text style={styles.reference}>
          Due: {component.core.date} |
          Amount: $2.00 |
          Satus: {component.status}
          </Text>

          <Text style={styles.date}>Invoice Number: {component.core.ref}
           | (svo) <Icon name={iconName} size={XSMALL} style={styles.icon_grey} color={myobColor}/>
           | (ovd) <Icon name={iconName} size={XSMALL} style={styles.icon_grey} color={myobColor}/>
           | (upa) <Icon name={iconName} size={XSMALL} style={styles.icon_grey} color={myobColor}/></Text>
        </View>
        
        <View style={styles.chevronContainer}>
          <Icon name={iconName} size={XSMALL} style={styles.icon_grey} color={myobColor}/>
          <Text></Text>
          <Text></Text> 
        </View>

      </View>
    </TouchableHighlight>
  );
};

MyobItem.propTypes = {
  contact: PropTypes.object,
  onPress: PropTypes.func,
};

export default MyobItem;