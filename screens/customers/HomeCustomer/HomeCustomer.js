
import * as React from 'react';
import { View } from 'react-native';
import { styles, color } from '../../../assets/style';
import menu from '../../../assets/img/menu.png';
import coichemenu from '../../../assets/img/coichemenu.png';
import offers from '../../../assets/img/offers.png';
import products from '../../../assets/img/products.png';

import GoToButton from '../../../components/GoToButton';
import SwipeableViews from 'react-swipeable-views-native';


export default function HomeCustomer({navigation}) {
  //console.log("user: "+Global.user);
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
            <div class="card" style={{ width: '90%',
                            height: '100%',
                            margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <img class="card-img-top img-responsive ml-auto mr-auto" style={{width: '80%', marginTop: '1rem'}} src= {coichemenu} alt="Discovery menu"/>
              <div class="card-body mr-auto">
                <h5 style={{padding: '0.5rem'}}> {lorem} </h5>
              </div>
              <div class="mt-auto ml-auto mr-auto">
              <GoToButton class="align-self-end" screen={dMenu} navigation={navigation} />
              </div>
            </div> 
         </View>
         <View id='staticmenu' style = {styles.container}>
            <div class="card" style={{ width: '90%',
                            height: '100%',
                            margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <img class="card-img-top img-responsive ml-auto mr-auto" style={{width: '80%', marginTop: '1rem'}} src= {menu} alt="Static menu"/>
              <div class="card-body mr-auto">
                <h5 style={{padding: '0.5rem'}}> {lorem} </h5>
              </div>
              <div class="mt-auto ml-auto mr-auto">
              <GoToButton class="align-self-end" screen={sMenu} navigation={navigation} />
              </div>
            </div> 
         </View>
         <View id='todayoffers' style = {styles.container}>
            <div class="card" style={{ width: '90%',
                            height: '100%',
                            margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <img class="card-img-top img-responsive ml-auto mr-auto" style={{width: '80%', marginTop: '1rem'}} src= {offers} alt="Today's offers"/>
              <div class="card-body mr-auto">
                <h5 style={{padding: '0.5rem'}}> {lorem} </h5>
              </div>
              <div class="mt-auto ml-auto mr-auto">
              <GoToButton class="align-self-end" screen={tOffer} navigation={navigation} />
              </div>
            </div> 
         </View>
         <View id='ourproducts' style = {styles.container}>
            <div class="card" style={{ width: '90%',
                            height: '100%',
                            margin: '0.5rem',
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
              {/* <div class="card-header">
                <h5 class="card-title" style = {{ color: color.primary}}> {dMenu} </h5>
              </div> */}
              <img class="card-img-top img-responsive ml-auto mr-auto" style={{width: '80%', marginTop: '1rem'}} src= {products} alt="Our products"/>
              <div class="card-body mr-auto">
                <h5 style={{padding: '0.5rem'}}> {lorem} </h5>
              </div>
              <div class="mt-auto ml-auto mr-auto">
              <GoToButton class="align-self-end" screen={ourProduct} navigation={navigation} />
              </div>
            </div> 
         </View>
      </SwipeableViews>
    );
  }
  