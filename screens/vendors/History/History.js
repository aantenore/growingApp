
import * as React from 'react';
import {View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton'

//TODO - Simple list of all previous orders

export default function History({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>History Screen Works!</Text>
        <GoToButton screen='HomeVendor' navigation={navigation} />
      </View>
    );
  }