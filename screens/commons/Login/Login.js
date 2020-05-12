
import * as React from 'react';
import { View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton';
import { styles } from '../../../assets/style';


//TODO Login by shop and registering phase

export default function Login({navigation}) {
    return (
      <View style = {styles.container}>
        <GoToButton screen='HomeCustomer' navigation={navigation} params={{context:'customer',table:'1'}}/>
        <GoToButton screen='testGetProducts' navigation={navigation} params={{context:'customer',table:'1'}}/>
        <GoToButton screen='HomeVendor' navigation={navigation} params={{context:'vendor',table:undefined}}/>
      </View>
    );
  }
  