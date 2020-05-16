
import * as React from 'react';
import { View,Text,Image } from 'react-native';
import { styles, color } from '../../../assets/style';
import menu from '../../../assets/img/menu.png';
import coichemenu from '../../../assets/img/coichemenu.png';
import offers from '../../../assets/img/offers.png';
import products from '../../../assets/img/products.png';
import Getter from '../../../service/Getter';

import GoToButton from '../../../components/GoToButton';
import SwipeableViews from 'react-swipeable-views-native';
//import Swiper from 'react-native-swiper'



export default function HomeCustomer({navigation}) {
  //console.log("user: "+Global.user);
  Getter.getDbRef();
  var dMenu = 'DiscoveryMenu';
  var sMenu = 'StaticMenu';
  var tOffer = 'TodayOffers';
  var ourProduct = 'OurProducts';
  var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus posuere facilisis. Ut at ultrices massa. Morbi fringilla ipsum eget odio porttitor sagittis. Curabitur mattis rhoncus neque, eget tempus metus. Donec commodo velit vitae arcu scelerisque eleifend. Fusce sollicitudin dapibus nunc, aliquam mollis enim dignissim nec. ";
    return (
      // <View  style = {styles.container}>
      //   {/* <GoToButton screen='DiscoveryMenu' navigation={navigation} />
      //   <GoToButton screen='StaticMenu' navigation={navigation} />
      //   <GoToButton screen='TodayOffers' navigation={navigation} />
      //   <GoToButton screen='OurProducts' navigation={navigation} /> */}
       
      // </View>
  
      <SwipeableViews>
         <View id='discoverymenu' style = {styles.container}>
         <View style={{  //margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
                            backgroundColor: 'white',
                            flex:1,
                            flexDirection:'column',
                            justifyContent:'space-between'}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <View style ={{flex:2}}>
              <Image style={{resizeMode: 'contain',flex:1}} source= {coichemenu} alt="Discovery menu"/>
              </View>
              <View style ={{flex:1}}>
              <Text style={{flex: 1,}}> {lorem} </Text>
              </View>
              <View style={{flex: 1, flexDirection:'row', justifyContent:'center'}}>
              <GoToButton style={{flex: 1,}} screen={dMenu} navigation={navigation} />
              </View>
            </View> 
         </View>
         <View id='staticmenu' style = {styles.container}>
            <View style={{  //margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
                            backgroundColor: 'white',
                            flex:1,
                            flexDirection:'column',
                            justifyContent:'space-between'}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <View style ={{flex:1}}>
              <Image  style={{resizeMode: 'contain',flex:1}} source = {menu} alt="Static menu"/>
              </View>
              <View style ={{flex:1}}>
              <Text style={{flex:1}}> {lorem} </Text>
              </View>
              <View style={{flex: 1, flexDirection:'row', justifyContent:'center'}}>
              <GoToButton style={{flex: 1,}} screen={sMenu} navigation={navigation} />
              </View>
            </View> 
         </View>
         <View id='todayoffers' style = {styles.container}>
         <View style={{  //margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
                            backgroundColor: 'white',
                            flex:1,
                            flexDirection:'column',
                            justifyContent:'space-between'}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <View style ={{flex:1}}>
              <Image  style={{resizeMode: 'contain',flex:1}} source = {offers} alt="Today's offers"/>
              </View>
              <View style ={{flex:1}}>
              <Text style={{flex: 1}}> {lorem} </Text>
              </View>
              <View style={{flex: 1, flexDirection:'row', justifyContent:'center'}}>
              <GoToButton style={{flex: 1,}}screen={tOffer} navigation={navigation} />
              </View>
            </View> 
         </View>
         <View id='ourproducts' style = {styles.container}>
         <View style={{  //margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
                            backgroundColor: 'white',
                            flex:1,
                            flexDirection:'column',
                            justifyContent:'space-between'}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <View style ={{flex:1}}>
              <Image  style={{resizeMode: 'contain',flex:1}} source = {products} alt="Today's offers"/>
              </View>
              <View style ={{flex:1}}>
              <Text style={{flex:1,}}> {lorem} </Text>
              </View>
              <View style={{flex: 1, flexDirection:'row', justifyContent:'center'}}>
              <GoToButton style={{flex: 1,}} screen={ourProduct} navigation={navigation} />
              </View>
            </View> 
         </View>
      </SwipeableViews>
    );
  }
  