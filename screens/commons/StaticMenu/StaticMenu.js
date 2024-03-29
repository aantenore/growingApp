import { View, FlatList, Button } from 'react-native';
import * as React from 'react';
import { styles,color } from '../../../assets/style';
import ProductList from '../../../components/ProductList';

//TODO - Simple Menu for customer, CRUD interface for Vendor

export default function StaticMenu({ navigation}) {
  return (
      <View style={{ width: '100%',
                            height: '100%',
                            backgroundColor: color.secondary,
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
        <StaticMenuComponent navigation={navigation}></StaticMenuComponent>
      </View>

  );
}



class StaticMenuComponent extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={{ flex:1}}>
        <ProductList navigation={this.props.navigation} ></ProductList>
      </View>
    );
  }
}


  