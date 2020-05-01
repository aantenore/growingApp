
import * as React from 'react';
import { View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton'

//TODO Login by shop and registering phase

export default function Login({navigation}) {
  //console.log("user: "+global.user);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen Works!</Text>
        <GoToButton screen='HomeCustomer' navigation={navigation} params={{user:'testshop',context:'customer',table:'1'}}/>
        <GoToButton screen='HomeVendor' navigation={navigation} params={{user:'testshop',context:'vendor',table:undefined}}/>
      </View>
    );
  }
  