import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { RefreshControl } from 'react-native';
import { useState, useEffect } from 'react';
import { styles } from '../assets/style';
import { getAssessmentsforSubject } from '../services/Database';
import { onAuthStateChanged } from 'firebase/auth';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL } from '@firebase/storage';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';


export default function AssessmentsScreen({navigation, route }){
  const subjectid=route.params.subjectId;
 // alert(route.params.subjectId)
 // const navigation=useNavigation();
  const [IsLoading, setIsLoading]=useState(true);
  const [assessments,setAssessments]=useState([]);
  const [currentUser,setcurrentUser]=useState()
  
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    
    async function getData(){
     // alert("HELLO");
      await fetchAssessments();
    }
    getData();
  },[])

  const fetchAssessments=async()=>{
      let data = await getAssessmentsforSubject(subjectid);
      //setAssessments(data);
      getAssessmentsforSubject(subjectid).then(setAssessments(data));
      //alert("fetchSubjects")
    }

  return(

    <View style={styles.container}>
      <Text style={styles.heading}>Assessments</Text>
      <ScrollView style={styles.scrollcontainer}>
      {assessments.map((assessment, index)=>(
        
        <TouchableOpacity style={styles.subjectselect3} onPress={() => navigation.navigate('QuestionsScreen', {assessmentId:assessment.id,subjectId:subjectid} )} >
            <Text style={styles.heading2}>{assessment.name}</Text>

        </TouchableOpacity>

    ))}
      </ScrollView>
      <TouchableOpacity style={styles.iconbutton} onPress={() => navigation.navigate('AddAssessment',{subjectId:subjectid})}><Text style={styles.iconbuttontext}>+</Text></TouchableOpacity>
    </View>



  )
}