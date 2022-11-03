import {React, useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { styles } from '../assets/style';
import { AddSubject } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

export default function AddSubjectScreen({navigation}){
    
    const [subjectName,setSubjectName]=useState();
    const [grade,setGrade]=useState();

    const Enter=async()=>{
        await AddSubject(subjectName,grade).then(navigation.navigate("SubjectsScreen"))

      }
    
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Add Subject</Text>
          <TextInput style={styles.input} onChangeText={setSubjectName} placeholder='SubjectName'></TextInput>
          <TextInput style={styles.input} onChangeText={setGrade} placeholder='Grade'></TextInput>
          <TouchableOpacity onPress={Enter}style={styles.button}>
            <Text style={styles.buttontext}>Done</Text>
          </TouchableOpacity>
        </View>
    );
  }
 // 