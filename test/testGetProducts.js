import * as React from 'react';
import { View, Button } from "react-native";
import Getter from '../service/Getter';
import constants from '../constants/constants';
import Product from '../Utils/Product';
import Remover from '../service/Remover';
import Setter from '../service/Setter';


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

        //test Getter
        console.log(Getter.getFixedFoodCategoryFeaturesObject('salato'));
        console.log(Getter.getFixedDrinkCategoryFeaturesObject('ipa'));
        console.log(Getter.getRawMaterialCategoryFeaturesObject('affettato'));
        console.log(Getter.getFoods());
        console.log(Getter.getDrinks());
        console.log(Getter.getRawMaterials());

       /* console.log(Getter.getAllChildFeatures(constants.foods+constants.fixedSalty+constants.pathOf('hamburger')));
        console.log(Getter.getAllChildFeatures(constants.drinks+constants.fixed));
        console.log(Getter.getAllChildFeatures(constants.drinks+constants.fixed+constants.pathOf('birra')));
        console.log(Getter.getAllChildFeatures('/'));
        console.log(Getter.getAllChildFeatures(constants.foods));*/ 

        //test Setter
/*        let rm1
         = {
            name : 'cotto praga',
            category:constants.rawMaterials,
            caratteristiche: {
                culo:1,
                ano:2,
            },
            descrizione: 'd'
        }
        let rm2 = {
            category:constants.rawMaterials+'/a',
            name : 'cotto praga',
            caratteristiche: {
                culo:1,
                ano:2,
            },
            descrizione: 'd'
        }
        let fd = {
            category:constants.drinks+constants.fixed+'/birra/buona',
            name: 'peroni',
            caratteristiche: {
                culo:1,
                ano:2,
            },
            descrizione: 'd'
        }
        let cf = {
            name: 'hamburger',
            category:constants.foods+constants.combined+constants.salty,
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
        Setter.insertRawMaterial(rm1);
        Setter.insertSaltyCombinedFood(cf);
        Setter.insertSaltyFixedDrinkCategory('birra',cg.caratteristiche);
        Setter.insertSaltyFixedDrink(fd,'birra/buona');
        Setter.insertRawMaterial(rm2,'a');
        Setter.insertRawMaterialCategory('a',cg.caratteristiche);
        //test remover
/*        Remover.removeProduct(rm1);
        Remover.removeProduct(cf);
        Remover.removeProduct(rm2);
        Remover.removeProduct(fd);
        Remover.removeFixedSweetDrinkCategory('birra');
        Remover.removeRawMaterialCategory('/materie_prime/a');
*/       
return(<Button onPress={()=>{this.setState({})}} title='RELOAD'></Button>);
    };
 
    
}