import { Button,View, Text } from 'react-native';
import * as React from 'react';

export default class GoToButton extends React.Component {
    
 
  render(){
    return (
        <Button
            title={"Go to "+this.props?.screen}
            onPress={()=>{this.handlePress()}}
        />
    );
    };

    handlePress(){
        global.lastScreen=global.currentScreen;
        global.currentScreen=this.props?.screen;
        global.user=this.props?.params?.user!==undefined?this.props.params.user:global.user;
        global.context=this.props?.params?.context!==undefined?this.props.params.context:global.context;;
        global.table=this.props?.params?.table!==undefined?this.props.params.table:global.table;
        console.log('lastScreen: '+global.lastScreen);
        console.log('currentScreen: '+global.currentScreen);
        console.log('user: '+global.user);   
        console.log('context: '+global.context);
        console.log('table: '+global.table);
        this.props?.navigation.navigate(this.props?.screen);
      };
}