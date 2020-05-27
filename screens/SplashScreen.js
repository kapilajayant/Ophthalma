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

import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';

import * as firebase from 'firebase';
import {firebaseConfig} from '../config';

firebase.initializeApp(firebaseConfig)
const SplashScreen = ({navigation})  =>{

  React.useEffect(()=>{
    firebase.auth().onAuthStateChanged(
        user=>{
            if(user){
              navigation.replace('Home')
            }
        }
    )
}
);

  return (
    <View style={styles.body}>
        <StatusBar backgroundColor="#3cecbe"/>
        <View style={styles.header}>
            <Animatable.Image 
            style={styles.logo}
            source={require('../assets/logo.png')}
            animation="bounceIn"
            duraton="1500"
            />
        <Text style={[styles.textStyle, {color:'white'}]}>Ophthalma</Text>
        </View>
        <Animatable.View 
        style={styles.footer}
        animation="fadeInUpBig"
        >
          <Text style={styles.title}>Blindness becomes a thing of the past.</Text>
          <Text style={styles.text}>sign in to continue</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={()=>
              {
                navigation.navigate('SignInScreen')
                Toast.show("pressed me?")
              }
            }>
                <LinearGradient
                    colors={['#3cecbe', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        {/* <TouchableOpacity onPress = {()=>{navigation.navigate('About')}}>
          <View style={styles.buttonGetStarted}>
            <Text style={{color:'white', padding:10, fontSize:20, justifyContent:"center",}}>Get Started</Text>
          </View>
        </TouchableOpacity> */}
        {/* <Button style={styles.buttonGetStarted}
        title="Get Started"
        onPress = {()=>{navigation.navigate('About')}}
        /> */}
        </Animatable.View>                
    </View>
  );
}

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
export default SplashScreen;