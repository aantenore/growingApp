
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../assets/style';
import GoToButton from '../../../components/GoToButton';
import firebase from '../../../constants/database';

//TODO - For Customer List of today offers (hold to description) , for vendors CRUD interface for offers.

export default function TodayOffers({ navigation}) {
    return (
      <View style = {styles.container}>
        <Text>{'Login Screen Works!'+(global.lastScreen==='HomeCustomer'?' CUSTOMER VIEW!':' VENDOR VIEW!')}</Text>
        <GoToButton screen={global.lastScreen==='HomeCustomer'?'HomeCustomer':'HomeVendor'} navigation={navigation}/>
      </View>
    );
  }
  