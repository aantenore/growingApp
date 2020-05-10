import {  StyleSheet } from 'react-native';

export const color = {
  white: 'whitesmoke',
  whitedark: 'silver',
  primary: '#ff8f8f',
  secondary: '#38ada9', secondarydark: '#079992'//'#2c3e50' // '#2980b9' //'#EF5350'
};
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: color.secondary,
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    inputext: {
      width: 200,
      height: 44,
      padding: 10,
      textAlign:'center',
      fontWeight:'bold',
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
    inputorslider:{
      margin: '2rem',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
      backgroundColor:  color.white,
      width: 'auto',
      height: 'auto'
    },
    gotobutton: {
      alignItems: 'center',justifyContent: 'center',
      width: 200,
      height: 44,
      padding: 10,
      marginTop: 10,
      backgroundColor:  color.primary,
      borderRadius: '4.5%', 
      marginBottom: 10,
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
    }, 
    // ordinabutton: {
    //   width: 200,
    //   height: 44,
    //   padding: 10,
    //   marginTop: 10,
    //   backgroundColor:  color.whitedark,
    //   borderRadius: '4.5%', 
    //   marginBottom: 10, color: 'yellow',
    //   boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
    // }, 
    text: {
        color:  color.white,
        textAlign: "center",
        height: 18
    },
    inputtext:{
      color: 'black',
      textAlign: "center",
      height: 18
    },
    listitemtext:{
      color: 'black',
      height: 18,
      paddingLeft: '0.5rem'
    },
    h2: {
      color: 'black',
      height: 18,
      fontWeight: 'bold'
    },
    buttontext: {
      color:  color.white,
      textAlign: "center",
      height: 18,
      fontWeight: "bold",
      textTransform: 'uppercase'
    },
    scrollview: {
        flex: 1,
        //margin: '0.5rem',
       //padding: '0.75rem',
        width: '100%',
        height: '100%',
        backgroundColor:  color.secondary
    },
    item: {
      padding: 10,
      fontSize: 18,
      padding: '1rem'
    },
    plistitem: {
      padding: 10,
      fontSize: 18
    },
    card: {
      width: '90%',
      height: '100%',
      marginTop: '1rem',
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)',
    },
    title: {
      color: color.primary
    }
});