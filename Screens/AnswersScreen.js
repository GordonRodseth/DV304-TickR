import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { RefreshControl } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../assets/style';
import { getAnswers } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';


export default function AnswersScreen({ navigation, route }){
  const subjectid=route.params.subjectId;
  const assessmentid=route.params.assessmentId;
  const questionid=route.params.questionId;
  const question=route.params.Question;
  //const navigation=useNavigation();
  const [IsLoading, setIsLoading]=useState(true);
  const [answers,setAnswers]=useState([]);
  const [currentUser,setcurrentUser]=useState()
  
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    
    async function getData(){
     // alert("HELLO");
      await fetchAnswers();
    }
    getData();
  },[])

  const fetchAnswers=async()=>{
      let data = await getAnswers(subjectid,assessmentid,questionid);
      
      //setQuestions(data);
      getAnswers(subjectid,assessmentid,questionid).then(setAnswers(data));
      //alert("fetchSubjects")
    }

  return(

    <View style={styles.container}>
        <View style={styles.questioncontainer}>
          <Text style={styles.heading2white}>Answers for Question {question.number} </Text>
          <Text style={styles.question}>{question.question}</Text>
          <Text style={styles.marks}>{question.marks}</Text>

        </View>
      <ScrollView style={styles.scrollcontainer}>
      {answers.map((answer, index)=>(
        
        <View style={styles.touchopacity}  >
            <Text style={styles.heading2}>{answer.student}'s Answer:</Text>
            <Text style={styles.question2}>{answer.answer}</Text>
            <View style={styles.keycontainer}>
              <Text style={styles.key}>{answer.keyword1}</Text>
              <Text style={styles.key}>{answer.keyword2}</Text>
              <Text style={styles.key}>{answer.keyword3}</Text>
            </View>
            <Text style={styles.marks}>{answer.mark}/{question.marks}</Text>

        </View>

    ))}
      </ScrollView>
      <TouchableOpacity style={styles.iconbutton} onPress={() => navigation.navigate('ScanScreen',{subjectId:subjectid, assessmentId:assessmentid,questionId:questionid,Question:question})}><Text style={styles.iconbuttontext}>+</Text></TouchableOpacity>
    </View>



  )
}