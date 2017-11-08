import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../components_lib/EditObject/Header'
import Actions from '../../components_lib/EditObject/Actions'
import Footer from '../../components_lib/EditObject/Footer'
import ActionsFooter from '../../components_lib/EditObject/ActionFooter'



class InTrayEdit extends Component {
  
  render() {
    const myobObject = this.props.navigation.state.params;



    return(
      <ScrollView>
        <Header {...myobObject}/> 
        <Actions {...myobObject}/> 
        <ActionsFooter {...myobObject}/> 
        <Footer {...myobObject}/> 
      </ScrollView>
    );
  }
}

export default InTrayEdit;