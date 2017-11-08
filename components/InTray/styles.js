import {StyleSheet, Dimensions } from 'react-native';
import colors from '../../basics/colors';
export const ICON_SIZE = 25;

export default StyleSheet.create({
    

    mainContainer:{
        flex: 1,
        borderTopColor: colors.brandGrayLighterTwo,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.brandGrayLighterTwo,
        backgroundColor: colors.background,
    },

    headerTitle:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.brandGrayLighterTwo,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.brandPrimary,
        backgroundColor: colors.brandGrayLighterTwo
    },

    headerTitleLabel:{
        paddingLeft:15,
        color: '#8241AA',
        fontWeight:'500',
        fontSize:30,
    },

    filterContainer:{
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: colors.brandPrimary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.brandGrayLighterTwo
    },
    
    footerInfo:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom:3,
        marginLeft:3,
        marginRight:3,
        marginTop:3,
        backgroundColor: colors.brandGrayLighterTwo
    },

    footerLabel:{
        justifyContent: 'space-between',
        flexDirection: 'column',
        marginBottom:3,
        marginLeft:3,
        marginRight:3,
        marginTop:3,
        alignItems: 'center',
    },

    filterLabel:{
        fontSize:14,
        justifyContent: 'center'
    },

    filterQuery:{
        fontSize:10,
        justifyContent: 'center',
         color: colors.brandInfo
    }

});