import * as ImagePicker from 'expo-image-picker';
import {React, useState,useEffect} from 'react';
import { Button, Image, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {callGoogleNLPAsync} from '../functions/GoogleNLP';
import {callGoogleVisionAsync} from '../functions/GoogleVision';
import { NavigationContainer, useNavigation, useIsFocused } from '@react-navigation/native';
import {styles} from '../assets/style';
import { signOut } from '@firebase/auth';
import { auth } from '../firebase';
import Subjects from '../Components/SubjectContainers';
//
const SubjectsScreen=()=>{
  const navigation = useNavigation();

  const isFocused = useIsFocused();
 
  useEffect(() => {
    <Subjects />
  }, [isFocused]);

  if(!auth.currentUser){
    navigation.navigate("VerificationTabs");
  }

  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate('VerificationTabs')
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}
  return (
    <View style={styles.container}>
        <Text style={styles.heading}> Your Subjects</Text>
        <ScrollView style={styles.scrollcontainer}>
          <Subjects  />
          <TouchableOpacity style={styles.iconbutton} onPress={() => navigation.navigate('AddSubject')}><Text style={styles.iconbuttontext}>+</Text></TouchableOpacity>
        </ScrollView>
       
        <TouchableOpacity style={styles.signout} onPress={handleSignOut} >
                <Text style={styles.signouttext}>Sign Out</Text>
          </TouchableOpacity>
    </View>
  );
}

export default SubjectsScreen;

