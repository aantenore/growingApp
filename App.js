import React from 'react';
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
import testGetProducts from './test/testGetProducts'

//TODO hide header for HomeScreens

const Stack = createStackNavigator();

function App(){
  global.currentScreen='Login';
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={commonOptions} />
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

const commonOptions =
{
  headerStyle :{ backgroundColor: 'transparent'} ,
  title: "",
  headerRight: ()=>(<Cart></Cart>) 
}


export default App;
