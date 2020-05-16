
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles, color } from '../../../assets/style';
import GoToButton from '../../../components/GoToButton'
import { NavigationContainer } from '@react-navigation/native';

//TODO - List of all our product (List and click for description)

export default function OurProducts({ navigation }) {
    return (
      <View style={{ width: '100%',
                            height: '100%',
                            backgroundColor: color.secondary,
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
        <Text>OurProducts Screen Works!</Text>
        <GoToButton screen={global.lastScreen==='HomeCustomer'?'HomeCustomer':'HomeVendor'} navigation={navigation}/>
      </View>
    );
  }
  