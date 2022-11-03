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


export default function Subjects(){
  const navigation=useNavigation();
  const [IsLoading, setIsLoading]=useState(true);
  const [subjects,setSubjects]=useState([]);
  const [currentUser,setcurrentUser]=useState()
  
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(()=>{
    
    async function getData(){
     // alert("HELLO");
      await fetchSubjects();
    }
    getData();
  },[])

  const fetchAssessments=async()=>{
      let data = await getAssessmentsforSubject();
      setSubjects(data);
     // getSubjectsforUser().then(setSubjects(data));
      //alert("fetchSubjects")
    }

  return(

    <View >
      <TouchableOpacity onPress={fetchSubjects}><Text style={styles.buttontext2}>Refresh</Text></TouchableOpacity>
      {subjects.map((subject, index)=>(
        
        <TouchableOpacity style={styles.subjectselect} onPress={() => navigation.navigate('AssessmentsScreen', {subjectId:subject.id} )} >
            <Text style={styles.heading2}>{subject.name}</Text>
            <Text>Grade: {subject.grade}</Text>
        </TouchableOpacity>

    ))}
    </View>



  )
}