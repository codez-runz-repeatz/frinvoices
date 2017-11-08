import React from 'react';
import { View, Platform, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles,{ICON_SIZE} from './styles';

import RowHeader from './RowHeader';
import Row from './Row';

const Actions = ({ uid,type,amount,core }) => {
     return (
             <View style={styles.actionContainer}>
             <RowHeader label="Invoice Number" body={type}
                    />
                
                <Row label="Invoice Number" body={type} 
                    />
             
</View>
     );
};

export default Actions;