
import * as React from 'react';
import { View, Text } from 'react-native';
import { styles, color } from '../../../assets/style';
import GoToButton from '../../../components/GoToButton'
import DiscoveryList from '../../../components/DiscoveryList'
import Swipe from '../../../components/Swipe';

//TODO - Search by parameter and category (What and in what order)

export default function DiscoveryMenu({ navigation}) {
    return (
           
      <div class='card'style={{ width: '100%',
                            height: '100%',
                            backgroundColor: color.secondary,
                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',}}>
         <DiscoveryList navigation={navigation}></DiscoveryList>
      </div>

    );

  }
  