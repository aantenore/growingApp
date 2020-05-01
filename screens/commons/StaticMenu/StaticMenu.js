
import * as React from 'react';
import { View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton';
import ProductList from '../../../components/ProductList';
//TODO - Simple Menu for customer, CRUD interface for Vendor

export default function StaticMenu({ navigation}) {
  return (
    <StaticMenuComponent navigation={navigation}></StaticMenuComponent>
  );
}



class StaticMenuComponent extends React.Component{

  constructor(props){
    super(props);
    console.log('/'+global.user+'/products');
  }

  render(){
    return(
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ProductList navigation={this.props.navigation}></ProductList>
      <Text>{'StaticMenu Screen Works!'+(global.lastScreen==='HomeCustomer'?' CUSTOMER VIEW!':' VENDOR VIEW!')}</Text>
      <GoToButton screen={global.lastScreen==='HomeCustomer'?'HomeCustomer':'HomeVendor'} navigation={this.props.navigation}/>
    </View>);
  }
}


  