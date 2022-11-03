import {React, useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { styles } from '../assets/style';
import { AddAssessment } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

export default function AddAssessmentScreen({navigation, route}){
    const subjectid = route.params.subjectId;
    //alert(subjectid);
    const [assessmentName,setAssessmentName]=useState();


    const Enter=async()=>{
        await AddAssessment(assessmentName,subjectid).then(navigation.navigate("AssessmentsScreen",{subjectId:subjectid}))

      }
    
    return (
        <View style={styles.container}>

          <TextInput style={styles.input} onChangeText={setAssessmentName} placeholder='Assessment Name'></TextInput>
          <TouchableOpacity onPress={Enter}style={styles.button}>
            <Text style={styles.buttontext}>Done</Text>
          </TouchableOpacity>
        </View>
    );
  }
 // 