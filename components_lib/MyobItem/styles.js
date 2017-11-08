import { StyleSheet } from 'react-native';

import colors from '../config/colors';

export const CHEVRON_SIZE = 25;
export const XSMALL= 14;

export default StyleSheet.create({
  
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: colors.subtleText
  },
  

  containerViewPay:{
    justifyContent: 'flex-start',
    marginRight:10
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  
  customer: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primaryText,
  },
  
  reference: {
    fontSize: 15,
    fontWeight: '500',
    color: colors.primaryText,
  },
  

  date: {
    color: colors.subtleText,
  },

  separator: {},
  chevronContainer: {
    justifyContent: 'flex-end',
    flexGrow: 1,
  },

  icon_blue: {
    alignSelf: 'flex-end',
    color: 'blue'
  },
  
  icon_light_grey: {
    marginRight: 20,
    color: colors.subtleText
  },

  icon_grey: {
    alignSelf: 'flex-end'
  },

  icon_red: {
    alignSelf: 'flex-end',
    color: 'red'
  },

  icon_purple: {
    alignSelf: 'flex-end',
    color: 'purple'
  },

});