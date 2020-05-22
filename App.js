/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';


import SplashScreen from './screens/SplashScreen';
import RootStackScreen from './screens/RootStackScreen';

const Stack = createStackNavigator();

const App = ()=>{
  return (
    <NavigationContainer>
        <RootStackScreen/>
    </NavigationContainer>
  );
}

export default App;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({

  body:{
    backgroundColor:"#3cecbe",
    flex:1
  },
  
  button: {
    alignItems: 'flex-end',
    marginTop:20
},
  buttonGetStarted:{
    borderRadius:10,
    alignItems:"center",
    alignItems:'center',
    marginTop:10,
    width:150,
    backgroundColor:'#3cecbe'
  },
  header:{
    flex:1.5,
    justifyContent:"center",
    alignItems:"center"
  },
  footer:{
    flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 40,
      paddingHorizontal: 30
  },
  
  logo: {
    width: height_logo,
    height: height_logo
},

signIn: {
  width: 150,
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 50,
  flexDirection: 'row',
},
  textStyle:{
    marginTop:10,
    fontWeight:"bold",
    fontSize:40
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
},
text: {
    color: 'grey',
    marginTop:5
},

textSign: {
  color: 'white',
  fontWeight: 'bold'
}
 
});