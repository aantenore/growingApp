import * as React from 'react';
import { View, Button } from "react-native";
import Getter from '../service/Getter';
import constants from '../constants/constants';
import Product from '../Utils/Product';


export default function testGetProducts(){

    return (React.createElement(ciao));
} 

class ciao extends React.Component{

    render(){
/*
        //test util/Product
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

    console.log(Product.getFeatureValuesObject(a));
*/
/*
        //test Getter
        console.log(Getter.getFixedFoodCategoryFeaturesObject('diavola'));
        console.log(Getter.getFixedDrinkCategoryFeaturesObject('birra'));
        console.log(Getter.getRawMaterialCategoryFeaturesObject('bufala'));
*/
/*
        //test Setter
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
        let rm = {
            name : 'cotto praga',
            caratteristiche: {
                culo:1,
                ano:2,
            },
            descrizione: 'd'
        }
        let fd = {
            name: 'peroni',
            caratteristiche: {
                culo:1,
                ano:2,
            },
            descrizione: 'd'
        }
        let cf = {
            name: 'hamburger',
            c_1: 'a',
            c_2: 'a',
            c_3: 'a',
            c_4: 'a',
            c_5: 'a',
            c_6: 'a',
            c_7: 'a',
            descrizione: 'd'
        }
        let cg = {
            caratteristiche: {
                culo:1,
                ano:2,
            },
        }
        Setter.insertRawMaterial(rm);
        Setter.insertSaltyCombinedFood(cf);
        Setter.insertSaltyFixedDrink(fd,'birra/buona');
        Setter.insertRawMaterial(rm,'a');
        Setter.insertRawMaterialCategory('a',cg);
*/
        return(<Button onPress={()=>{this.setState({})}} title='RELOAD'></Button>);
    };
 
    
}