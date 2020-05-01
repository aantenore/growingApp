import { Button,View, Text,StyleSheet,Alert,Platform} from 'react-native';
import * as React from 'react';
import Cart,{CANIADD} from './Cart';

export default class ProductListItem extends React.Component {

    render(){
        return(
          <View style={{
            flex:1,
            flexDirection:'column',
            backgroundColor: this.props.index % 2==0?'green':'orange',
            marginTop: 10
            }}>
            <View>
            <Text style={styles.listItem}>{'prodotto: '+this.props.item.key}</Text>
            {(this.props.item.description!==''&&this.props.item.description!==undefined)?<Text style={styles.listItem}>{'description: '+this.props.item.description}</Text>:null}
            {Object.keys(this.props.item).map(el=>{
                if(this.props.item[el]!==this.props.item.key&&el!=='description'){
                let result = [<Text style={styles.listItem}>{el}: {this.props.item[el]} </Text>];
                return result;
                }
            })}
            {(global.context==='customer')?(<Button title='Ordina!' onPress={()=>{this.addToCart()}}></Button>):(<Button title='Modifica!'></Button>)}
            </View>
        </View>
    );
  };

  addToCart(){
    //if(type=='combined') Compose your product and substitute the component with the corresponding fixed product
    global.CANIADD=true;
    navigation?.setOptions({
      headerRight: ()=>(<Cart productToAdd={this.props.item}></Cart>)
    })
    this.showAlert();
  }

  showAlert(){
    if (Platform.OS === 'web') {
      alert('Prodotto aggiunto!');
    }else{
    Alert.alert('Prodotto aggiunto!','Vuoi continuare ad ordinare?',[{ text: 'Continua l\'ordinazione', onPress: () => console.log('Alert closed') },
    {
      text: 'Vai al carrello',
      onPress: () => console.log('Open Cart'),
      style: 'cancel',
    }],{cancelable:false})
   }
  }
constructor(props){
  super(props);
  navigation=this.props.navigation;
}
}

var navigation=null;

const styles = StyleSheet.create({
     item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

/* 
<Image
            //source={{uri: }}
            source='../assets/icon.png'
            style={{width:100,height:100,margin:5}}>

            </Image>
            */