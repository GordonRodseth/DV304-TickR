import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { RefreshControl } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../assets/style';
import { getQuestionsforAssessment } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';


export default function QuestionsScreen({ navigation, route }){
  const subjectid=route.params.subjectId;
  const assessmentid=route.params.assessmentId;
  //const navigation=useNavigation();
  const [IsLoading, setIsLoading]=useState(true);
  const [questions,setQuestions]=useState([]);
  const [currentUser,setcurrentUser]=useState()
  
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    
    async function getData(){
     // alert("HELLO");
      await fetchQuestions();
    }
    getData();
  },[])

  const fetchQuestions=async()=>{
      let data = await getQuestionsforAssessment(subjectid,assessmentid);
      
      //setQuestions(data);
      getQuestionsforAssessment(subjectid,assessmentid).then(setQuestions(data));
      //alert("fetchSubjects")
    }

  return(

    <View style={styles.container}>
      <Text style={styles.heading}>Questions</Text>
      <ScrollView style={styles.scrollcontainer}>
      {questions.map((question, index)=>(
        
        <TouchableOpacity style={styles.subjectselect2} onPress={() => navigation.navigate('ScanScreen', {assessmentId:assessmentid,subjectId:subjectid,questionId:question.id,Question:question} )} >
            <Text style={styles.heading2}>Question {question.number}</Text>
            <Text style={styles.question2}>{question.question}</Text>
            <Text style={styles.marks}>/{question.marks}</Text>
        </TouchableOpacity>

    ))}
      </ScrollView>
      <TouchableOpacity style={styles.iconbutton} onPress={() => navigation.navigate('AddQuestion',{subjectId:subjectid, assessmentId:assessmentid})}><Text style={styles.iconbuttontext}>+</Text></TouchableOpacity>
    </View>



  )
}