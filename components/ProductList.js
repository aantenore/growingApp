import { FlatList } from 'react-native';

import * as React from 'react';
import ProductListItem from './ProductListItem'
import firebaseClass from '../constants/database';
import { styles } from '../assets/style';


export default class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state={combinedProductsArray:[],fixedProductsArray:[]};
    }
    render(){
        console.log('combinedProductsArray: ',this.state.combinedProductsArray);
        console.log('fixedProductsArray: ',this.state.fixedProductsArray);
    return (
        <div class="pre-scrollable"
            style={{maxHeight: '100%'}}>
            <FlatList 
                data={this.state.combinedProductsArray}
                keyExtractor={(item,index)=>index}
                renderItem={({item,index})=>{
                            return(
                            <ProductListItem item={item} index={index}> </ProductListItem>
                           );
                        }}>
            </FlatList>
            <FlatList 
                data={this.state.fixedProductsArray}
                keyExtractor={(item,index)=>index}
                renderItem={({item,index})=>{
                            return(
                                <ProductListItem item={item} index={index}> </ProductListItem>
                                 );
                            }}>
            </FlatList>
            </div>
     );
  };

componentDidMount(){
    this.findProducts();
}

findProducts(){
    let ref = firebaseClass.db().ref('/'+global.user+'/products');
    ref.child('combined').once('value').then(products=>{
        let combinedProductsArray=[]
        products.forEach(product => {
            let item = product.val();
            item.key= product.key;
            item.type='combined';
            combinedProductsArray.push(item);
        });
        this.setState({combinedProductsArray});
    });
    ref.child('fixed').once('value').then(categories=>{
        let fixedProductsArray = [];
        categories.forEach(category=>{
                category.forEach(product=>{
                if(product.key!=='features'){
                    let item = product.val();
                    item.key = product.key;
                    item.type='fixed';
                    fixedProductsArray.push(item);
                }
            });
        });
        this.setState({fixedProductsArray});
    });
}

}


/*
.on('value',snap=>{
            this.setState({combinedProducts:snap.child('combined'),fixedProducts:snap.child('fixed')});
        });
*/
