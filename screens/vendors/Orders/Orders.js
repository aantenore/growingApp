
import * as React from 'react';
import {View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton'

export default function Orders({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Orders Screen Works!</Text>
        <GoToButton screen='HomeVendor' navigation={navigation}/>
      </View>
    );
  }