import React, {useState} from 'react';
import {
     View,
     StyleSheet,
     Text,
     Alert
}
from 'react-native';

import * as firebase from 'firebase';
import {firebaseConfig} from '../config';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Toast from 'react-native-simple-toast';

const Home = ({navigation}) => {
    
    const [userData, setUserData] = useState(
        {
            email:''
        }
    )

    // React.useEffect(()=>{
    //     firebase.auth().onAuthStateChanged(
    //         user=>{
    //             if(user){
    //                 setUserData(
    //                     {
    //                         email: user.email
    //                     }
    //                 )
    //             }
    //             else{
    //                 navigation.navigate('SplashScreen')
    //             }
    //         }
    //     )
    // }
    // );

    return(
        <View style={styles.text}>
            <Text>Welcome User {firebase.auth().currentUser.email}</Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>
              {
                Toast.show("Signed Out")
                firebase.auth().signOut()
                .then(
                    ()=>{
                        navigation.replace('SplashScreen')
                    }
                )
                .catch(error=>{
                    Alert.alert(error.message)
                })
              }
            }>
                <LinearGradient
                    colors={['#3cecbe', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Sign Out </Text>
                    <MaterialIcons 
                        name="power-settings-new"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </View>
    );
}

export default Home

const styles = StyleSheet.create({

    text:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    
    button: {
        alignItems: 'flex-end',
        marginTop:20
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }

})