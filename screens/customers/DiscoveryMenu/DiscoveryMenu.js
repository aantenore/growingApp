
import * as React from 'react';
import { View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton'
import DiscoveryList from '../../../components/DiscoveryList'

//TODO - Search by parameter and category (What and in what order)

export default function DiscoveryMenu({ navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <DiscoveryList navigation={navigation}></DiscoveryList>
        <Text>DiscoveryMenu Screen Works!</Text>
        <GoToButton screen='HomeCustomer' navigation={navigation}/>
      </View>
    );
  }
  