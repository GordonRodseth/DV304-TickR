import {React, useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { styles } from '../assets/style';
import { AddStudent } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

export default function AddStudentScreen({ navigation, route }){
    const subjectid=route.params.subjectid;
    const [studentName,setStudentName]=useState();
    const Enter=async()=>{
        await AddStudent(studentName,subjectid).then(navigation.navigate('StudentsScreen', {subjectId:subjectid} ))

      }
    
    return (
        <View style={styles.container}>

          <TextInput style={styles.input} onChangeText={setStudentName} placeholder='SubjectName'></TextInput>

          <TouchableOpacity onPress={Enter}style={styles.button}>
            <Text style={styles.buttontext}>Done</Text>
          </TouchableOpacity>
        </View>
    );
  }
 // 