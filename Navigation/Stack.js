import {React, useState, useEffect} from 'react';
import { Button, Image, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {callGoogleNLPAsync} from '../functions/GoogleNLP';
import {callGoogleVisionAsync} from '../functions/GoogleVision';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import {styles} from '../assets/style';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SubjectsScreen from '../Screens/SubjectsScreen';
import ScanScreen from '../Screens/ScanScreen';
import VerificationTabs from './VerificationTabs';
import AssessmentsScreen from '../Screens/AssessmentsScreen';
import AddSubjectScreen from '../Screens/AddSubjectScreen';
import QuestionsScreen from '../Screens/QuestionsScreen';
import AddQuestionScreen from '../Screens/AddQuestionScreen';
import AddAssessmentScreen from '../Screens/AddAssessmentScreen';
import AnswersScreen from '../Screens/AnswersScreen';
import { auth } from '../firebase'; 

const Stack = createNativeStackNavigator();

const StackNav=()=>{
  const [screen,setScreen]=useState();
  useEffect(() => {
    var user = auth.currentUser;

    if (user) {
      setScreen('SubjectsScreen')
    } else {
      setScreen('VerificationTabs')
    }
  }, []);

  //const navigation=useNavigation();
    return(
    
//    <NavigationContainer>
      <Stack.Navigator initialRouteName={screen}>
        <Stack.Screen name="SubjectsScreen" component={SubjectsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="ScanScreen" component={ScanScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="VerificationTabs" component={VerificationTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="AssessmentsScreen" component={AssessmentsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="QuestionsScreen" component={QuestionsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddSubject" component={AddSubjectScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddQuestion" component={AddQuestionScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AddAssessment" component={AddAssessmentScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AnswersScreen" component={AnswersScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
//</NavigationContainer>
      
    )
  }

  export default StackNav