import React from 'react';
import { View, Text } from 'react-native';

import styles, {ICON_SIZE} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

const Footer = ({ uid,type,amount,core }) => {
        return (
                <View style={styles.FooterContainer}>
                        
<View style={styles.HeaderContainer}>
        <Text style={styles.headerLabelLarge}>
Subtotal: {core.ref} <Icon name='ios-person' size={ICON_SIZE} style={styles.headerLabel}/> </Text> 

<Text style={styles.headerLabel}>
GST: {core.customer.desc} <Icon name='ios-person' size={ICON_SIZE} style={styles.headerLabel}/> </Text> 

<Text style={styles.headerLabel}>
Total: {core.customer.desc} <Icon name='ios-person' size={ICON_SIZE} style={styles.headerLabel}/> </Text>
</View>


<View style={styles.HeaderContainer}>
<Text style={styles.headerLabel}>
Amount Paid: {core.date} </Text> 
<Text style={styles.headerLabel}>
Amount Due: {core.date} </Text> 
</View>

</View>

     );
};

export default Footer;