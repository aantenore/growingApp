import * as React from 'react';
import { View, Button } from "react-native";
import Getter from '../service/Getter';
import constants from '../constants/constants';
import Product from '../Utils/Product';
import {storeShopName,retrieveShopName} from '../constants/userPreferences'


export default function testGetProducts(){

    return (React.createElement(ciao));
} 

class ciao extends React.Component{

    render(){
        let a = {
            ingredienti : 'i',
            caratteristiche: {
                culo:1,
                ano:2,
            },
            descrizione: 'd',
            name:'n',
            c_1 :'eee',
            c_2:'vvvv',
            c_3:'ai',
        }
        //console.log(storeShopName('testshopWriteTest'));
        console.log(global.user);
        return(<Button onPress={()=>{this.setState({})}} title='RELOAD'></Button>);
    };
 
    
}