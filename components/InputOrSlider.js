import { Button,View, Text, Platform } from 'react-native';
import Slider from "react-native-slider";
import * as React from 'react';
import Cart from './Cart';
import { styles } from '../assets/style';

export default class InputOrSlider extends React.Component {

    render(){
    return (
            <View style={
              //{backgroundColor: this.props.index % 2==0?'#ff5c5c':'#ff5c5c'},
               styles.inputorslider}>
            <Text style={styles.inputtext}>{this.props.item['category']}</Text>
                {Object.keys(this.props.item).map(el=>{
                    if(el!='category'){
                    console.log(Number.parseInt(this.props.item[el].split('-')[0]));
                    let result=[<Text style= {styles.inputtext}>{el}</Text>]
                    result.push(
                    <Slider  style={{width: 200, height: 40}}
                    value={Number.parseInt(this.props.item[el].split('-')[0])}
                    onValueChange={value => {let valueList = this.state.valueList;
                                            valueList[el]=value;
                                            this.setState({valueList})}}
                    minimumValue={Number.parseInt(this.props.item[el].split('-')[0])}
                    maximumValue={Number.parseInt(this.props.item[el].split('-')[1])}
                    step={1}>
                    </Slider>);
                    result.push(<Text style = {styles.inputtext}>
                        Value: {this.state.valueList[el]}
                    </Text>)
                    return result;
                    }
                    else return (<Text></Text>);
                })}
                
                  <Button title='Ordina' 
                      style = {styles.ordinabutton} 
                      onPress={()=>{this.addToCart()}}>
                  </Button>
                
            </View>
    );
  };

  constructor(props){
    super(props);
    this.state={valueList:{}};
    navigation=this.props.navigation;
    };

    addToCart(){
        global.CANIADD=true;
        navigation?.setOptions({
          headerRight: ()=>(<Cart productToAdd={this.props.item['category']}></Cart>)
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
}

var navigation=null;


//{this.props.item.features[el].split('-')[0]} minimumValue={this.props.item.features[el].split('-')[1]}