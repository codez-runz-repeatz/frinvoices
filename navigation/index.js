import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { StackNavigator }  from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';

import ComponentsMenu from '../components/menu/List';
import InTray from '../components/InTray';
import InTrayEdit from '../components/InTrayEdit';

import colors from '../basics/colors'

export const InvoiceStack = StackNavigator({
        InTray :{
            screen: (props) => <InTray {...props} {...props.invoices}/>,
            navigationOptions:{
                title: 'All Inboxes',
                headerTintColor: colors.brandGrayLighterTwo,
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold' },
                headerStyle: {
                    borderBottomColor: colors.brandGrayLighterTwo,
                    backgroundColor: colors.brandGrayLighterTwo
                },
            }          
        },

        InTrayEdit :{
            screen: InTrayEdit,
            navigationOptions: ({ navigation }) => ({
                headerTintColor: '#8241AA',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold' },
                headerStyle: {
                    backgroundColor: colors.brandGrayLighterTwo
                },
            }),          
        },
        
        ComponentsMenu : {
            screen: ComponentsMenu,
            navigationOptions:{
                title: 'Invoices Are Go',
                headerTintColor: '#8241AA',
                headerStyle: {
                    backgroundColor: '#A476C1'
                },
            }
        },
    }
);