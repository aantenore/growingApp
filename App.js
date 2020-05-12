import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import LoginScreen from './screens/commons/Login/Login';
import HomeCustomerScreen from './screens/customers/HomeCustomer/HomeCustomer';
import HomeVendorScreen from './screens/vendors/HomeVendor/HomeVendor';
import OurProductsScreen from './screens/customers/OurProducts/OurProducts';
import StaticMenuScreen from './screens/commons/StaticMenu/StaticMenu';
import DiscoveryMenuScreen from './screens/customers/DiscoveryMenu/DiscoveryMenu';
import TodayOffersScreen from './screens/commons/TodayOffers/TodayOffers';
import HistoryScreen from './screens/vendors/History/History';
import OrdersScreen from './screens/vendors/Orders/Orders';
import Cart from './components/Cart';
import testGetProducts from './test/testGetProducts';
import {storeShopName,retrieveShopName} from './constants/userPreferences'

import './node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Animated } from 'react-native';
import { color } from './assets/style';
import constants from './constants/constants';

//TODO hide header for HomeScreens
/*const forFade = ({ current, next }) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
   // leftButtonStyle: { opacity },
   // rightButtonStyle: { opacity },
    titleStyle: { opacity },
    backgroundStyle: { opacity },
  };
}; 
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const forFade = ({ current, closing }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});*/

const Stack = createStackNavigator();

function App(){
  global.currentScreen='Login';
  storeShopName('testshopWriteTest');
  retrieveShopName().then((name)=>{
    global.user=name;
  });
  //global.user = constants.defaultUser;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={loginOptions} />
        <Stack.Screen name="StaticMenu" component={StaticMenuScreen} options={commonOptions} />
        <Stack.Screen name="TodayOffers" component={TodayOffersScreen} options={commonOptions} />

        <Stack.Screen name="HomeCustomer" component={HomeCustomerScreen} options={commonOptions} />
        <Stack.Screen name="DiscoveryMenu" component={DiscoveryMenuScreen} options={commonOptions} />
        <Stack.Screen name="OurProducts" component={OurProductsScreen} options={commonOptions} />

        <Stack.Screen name="HomeVendor" component={HomeVendorScreen} options={commonOptions} />
        <Stack.Screen name="History" component={HistoryScreen} options={commonOptions} />
        <Stack.Screen name="Orders" component={OrdersScreen} options={commonOptions} />

        <Stack.Screen name="testGetProducts" component={testGetProducts} options={commonOptions} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const loginOptions = {
  headerShown: false,
}
const commonOptions =
{ headerTintColor: color.white,
  headerTitleStyle: {
    //fontWeight: '200',
    display: 'none'
  },
  headerMode: screen,
  headerStyle :{ 
    backgroundColor: color.secondary,
    elevation: 0,
    shadowOpacity: 0
  },
  headerRightContainerStyle:{ paddingRight: '3rem'},
  headerRight: () => (<Cart></Cart>)
 
  // transitionSpec: {
  //   open: config,
  //   close: config,
  // },
  //cardStyleInterpolator: forFade ,
  // headerStyleInterpolator: {forFade},

    
}


export default App;
