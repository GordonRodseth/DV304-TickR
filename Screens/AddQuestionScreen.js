import {React, useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native';
import { styles } from '../assets/style';
import { AddQuestion } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';

export default function AddQuestionScreen({navigation,route}){
    const subjectid=route.params.subjectId;
    const assessmentid=route.params.assessmentId;
    const [question,setQuestion]=useState();
    const [qno,setQno]=useState();
    const [marks,setMarks]=useState();

    const Enter=async()=>{
        await AddQuestion(subjectid,assessmentid,question,qno,marks).then(navigation.navigate("QuestionsScreen", {subjectId:subjectid, assessmentId:assessmentid}))

      }
    
    return (
        <View style={styles.container}>

          <TextInput style={styles.input} onChangeText={setQno} placeholder='Question Number'></TextInput>
          <TextInput style={styles.input} onChangeText={setMarks} placeholder='Total Marks'></TextInput>
          <TextInput style={styles.input} onChangeText={setQuestion} placeholder='Question'></TextInput>
          <TouchableOpacity onPress={Enter}style={styles.button}>
            <Text style={styles.buttontext}>Done</Text>
          </TouchableOpacity>
        </View>
    );
  }
 // 