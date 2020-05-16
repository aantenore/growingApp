
import * as React from 'react';
import { View, Text } from 'react-native';
import GoToButton from '../../../components/GoToButton';
import firebaseClass from '../../../constants/database';
import Getter from '../../../service/Getter';

export default function HomeCustomer({ navigation }) {
    //console.log("user: "+Global.user);
    Getter.getDbRef();
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>HomeVendor Screen Works!</Text>
        <GoToButton screen='StaticMenu' navigation={navigation} />
        <GoToButton screen='TodayOffers' navigation={navigation} />
        <GoToButton screen='Orders' navigation={navigation}/>
        <GoToButton screen='History' navigation={navigation} />
      </View>
    );
  }
  