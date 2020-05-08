import * as React from 'react';
import { View, Button } from "react-native";
import Getter from '../service/Getter';
import constants from '../constants/constants';


export default function testGetProducts(){

    return (React.createElement(ciao));
}

class ciao extends React.Component{

    render(){
        console.log(Getter.getFoods());
        return(<Button onPress={()=>{this.setState({})}} title='RELOAD'></Button>);
    };

    
}