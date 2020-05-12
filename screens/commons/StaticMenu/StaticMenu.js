
import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles,color } from '../../../assets/style';
import GoToButton from '../../../components/GoToButton';
import ProductList from '../../../components/ProductList';

//TODO - Simple Menu for customer, CRUD interface for Vendor

export default function StaticMenu({ navigation}) {
  return (
    // <View style={styles.container}>
      <div class='card' style={{ width: '100%',
                            height: '100%',
                            backgroundColor: color.secondary,
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
        <StaticMenuComponent navigation={navigation}></StaticMenuComponent>
      </div>
   // </View>
  );
}



class StaticMenuComponent extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="mr-auto ml-auto mt-auto mb-auto">
        <ScrollView horizontal={true}>
          <ProductList navigation={this.props.navigation}></ProductList>
        </ScrollView>
      </div>
    );
  }
}


  