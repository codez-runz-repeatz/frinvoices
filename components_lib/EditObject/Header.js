import React from 'react';
import { View, Text } from 'react-native';

import styles, {ICON_SIZE} from './styles';

import Icon from 'react-native-vector-icons/Ionicons';

const Header = ({ uid,type,amount,core }) => {
        return (
                <View style={styles.HeaderContainer}>
                        
<View style={styles.HeaderContainer}>
        <Text style={styles.headerLabelLarge}>
get_text(Invoice Number): {core.ref} <Icon name='ios-person' size={ICON_SIZE} style={styles.headerLabel}/> </Text> 

<Text style={styles.headerLabel}>
To: {core.customer.desc} <Icon name='ios-person' size={ICON_SIZE} style={styles.headerLabel}/> </Text> 
</View>


<View style={styles.HeaderContainer}>
<Text style={styles.headerLabel}>
Date of issue: {core.date} </Text> 
<Text style={styles.headerLabel}>
Date Date: {core.date} </Text> 
</View>

</View>

     );
};

export default Header;