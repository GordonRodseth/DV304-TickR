import {React, useState} from 'react';
import { Alert, ActivityIndicator, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { NavigationContainer, useNavigation  } from '@react-navigation/native';

//import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DropDownPicker from 'react-native-dropdown-picker';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../firebase'; 
import { createUserOnRegister } from '../services/Database';
import { styles } from '../assets/style';
import { UserCredential } from '@firebase/auth';




export default function SignUp({navigation}){
  const [errormessage,setErrorMessage]=useState("");
  const [username, onUsernameChange] = useState("");
  const [UserEmail, onEmailChange] = useState("");
  const [password, onPasswordChange] = useState("");

    const [loading, setLoading] = useState(false);
    
    const handleSignUpPress = () => {
      //perform our firebase auth function
      setLoading(true);
      
      //create user function (auth instance, email, and password)
      //const auth = getAuth();
      createUserWithEmailAndPassword(auth, UserEmail, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          createUserOnRegister(username);

          navigation.navigate("SubjectsScreen");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });

  }

    return(
      <View style={styles.container}>
        {errormessage ? (
          <>
          <Text style={styles.heading3}>{errormessage}</Text>
          </>
        ):(
          <></>
        )}
        

        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.heading2white}>Email</Text>
        <TextInput 
          onChangeText={onEmailChange}
          value={UserEmail}
          style = {styles.input}
        />

        <Text style={styles.heading2white}>Username</Text>
        <TextInput
          onChangeText={onUsernameChange}
          value={username}
          style = {styles.input}
        />

        <Text style={styles.heading2white}>Password</Text>
        <TextInput
          onChangeText={onPasswordChange}
          value={password}
          secureTextEntry={true}
          style = {styles.input}
        />

        <TouchableOpacity
            title="SignUp"
            onPress={handleSignUpPress}
            style={styles.button}
            
          >
            <Text style={styles.buttontext}>Enter</Text>
        </TouchableOpacity>
      </View>
      
    )
  }

