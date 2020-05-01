
import * as React from 'react';
import { View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton'
import { NavigationContainer } from '@react-navigation/native';

//TODO - List of all our product (List and click for description)

export default function OurProducts({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>OurProducts Screen Works!</Text>
        <GoToButton screen={global.lastScreen==='HomeCustomer'?'HomeCustomer':'HomeVendor'} navigation={navigation}/>
      </View>
    );
  }
  