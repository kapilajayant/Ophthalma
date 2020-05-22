import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  ScrollView,
  View,
  Dimensions,
  Text,
  StatusBar,
  Button,
  Image,
  Alert
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableHighlight, TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import { exp } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';

import * as firebase from 'firebase';
import {firebaseConfig} from '../config';


const SignInScreen = ({navigation})  =>{

    
    const [data, setData] = React.useState(
        {
            email:'',
            password:'',
            check_textInputChange:false,
            secureTextEntry:true,
        }
    );

    const textInputChange = (val)=>{
        if(val.length !== 0){
            setData(
                {
                    ...data,
                    email:val,
                    check_textInputChange:true
                }
            )
        }
        else{
            setData(
                {
                    ...data,
                    email:val,
                    check_textInputChange:false
                }
            )
        }
    }

    
    const handlePasswordChange = (val) =>{
        setData({
            ...data,
            password:val,
        })
    }

    const updateSecureTextEntry = (val) =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }


    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome{'\n'}Please Sign In</Text>
        </View>
        <Animatable.View
            style={styles.footer}
            animation="fadeInUpBig"
        >
            <ScrollView>
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
                <FontAwesome
                    name="user-o"
                    color="#969696"
                    size={20}
                />
                <TextInput
                    placeholder="Your Email"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange? 
                <Animatable.View
                animation="bounceIn"
                >
                <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                />
            </Animatable.View>
            : null}
            </View>
            <Text style={
                [
                    styles.text_footer,
                    {marginTop:20}
                ]
                }>Password</Text>
            <View style={styles.action}>
                <Feather
                    name="lock"
                    color="#969696"
                    size={20}
                />
                <TextInput
                    placeholder="Your Password"
                    secureTextEntry={data.secureTextEntry?true:false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText = { (val) =>{handlePasswordChange(val)} }
                />
                <TouchableOpacity
                onPress={updateSecureTextEntry}>
                {data.secureTextEntry?
                <Feather
                    name="eye-off"
                    color="green"
                    size={20}
                />
                :
                <Feather
                    name="eye"
                    color="green"
                    size={20}
                />
                }
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <LinearGradient
                    colors={['#3cecbe', '#01ab9d']}
                    style={styles.signIn}>
                    <TouchableOpacity onPress={()=>
                        {
                            // navigation.navigate('Home')
                            // Alert.alert(`${data.email} ${data.password}`)
                            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                            .then(
                                ()=>{
                                    navigation.replace('Home')
                                }
                            )
                            .catch(error=>{
                                Alert.alert(error.message)
                            })
                        }
                        }>
                        <Text style={[styles.textSign, {color:'#fff'}]}>Sign In</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('SignUpScreen')}
                style={[styles.signIn, {
                    borderColor: '#3cecbe',
                    borderWidth: 1.5,
                    marginTop: 15
                }]}
            >
                <Text style={[styles.textSign, {
                    color: '#3cecbe'
                }]}>Sign Up</Text>
            </TouchableOpacity>
            </ScrollView>
        </Animatable.View>
        </View>
    );
  }

export default SignInScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#3cecbe'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        marginBottom:20,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });