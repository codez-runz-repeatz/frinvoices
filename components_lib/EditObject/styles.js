import {StyleSheet, Dimensions } from 'react-native';
import colors from '../../basics/colors';
export const ICON_SIZE = 25;

export default StyleSheet.create({
    
    mainContainer:{
        flex: 1,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.brandPrimary,
        borderBottomColor: colors.brandPrimary,
        backgroundColor: colors.background
    },

    HeaderContainer:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.brandPrimary,
        borderBottomColor: colors.brandPrimary,
        backgroundColor: colors.background,
        paddingLeft: 10,
        justifyContent: 'flex-end',
    },

    FooterContainer:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.brandPrimary,
        borderBottomColor: colors.brandPrimary,
        backgroundColor: colors.background,
        paddingLeft: 200,
        justifyContent: 'flex-end',
    },

    headerLabelLarge:{
        fontWeight: '400',
        paddingVertical: 5,
        justifyContent: 'space-between',
        fontSize:16,
    },

    headerLabel:{
        fontWeight: '300',
        paddingVertical: 3,
        justifyContent: 'space-between',
        fontSize:14,
    },


    HeaderRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        backgroundColor: 'white',
    },

    actionContainer:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingVertical:20
    },
    actionRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20

    },
    actionInfo:{
        flexDirection: 'column',
    },
    actionLabel:{
fontSize: 12,
marginBottom:3,
    },
    actionBody:{
fontSize:16,
marginBottom: 5
    },

    actionIcons:{
flexDirection: 'row'
    },

    actionIcon:{
marginLeft: 13
    },
});