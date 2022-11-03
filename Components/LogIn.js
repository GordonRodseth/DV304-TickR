import {React, useState} from 'react';
import { Image, Platform, Alert, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { styles } from '../assets/style';
import { auth } from '../firebase';

export default function LogIn( {navigation} ) {
    const [UserName,setUserName]=useState('');
    const [email, onEmailChange] = useState("");
    const [Password, setPassword]=useState('');
    
    const handleLoginPress = () => {
      console.log('logging in')
      //perform our firebase auth function
      signInWithEmailAndPassword(auth, email, Password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        //Alert.alert(user.uid);
        //Navigate to next screen
        navigation.navigate("SubjectsScreen");

      }).catch((error) => {
        Alert.alert(error.message);
      })
  }

    return(
      <View style={styles.container}>

        <Text style={styles.heading}>Log In</Text>
        <Text style={styles.heading2white}>Email</Text>

        <TextInput
        value={email}
        onChangeText={onEmailChange}
        style = {styles.input}
      />
        <Text style={styles.heading2white}>Password</Text>
        <TextInput
          onChangeText={(Password) =>
                  setPassword(Password)
                }
          value={Password}
          secureTextEntry={true}
          style = {styles.input}
        />

        <TouchableOpacity
            title="LogIn"
            onPress={handleLoginPress}
            style={styles.button}
          >
            <Text style={styles.buttontext}>Enter</Text>
        </TouchableOpacity>
      </View>
      
    )
  }