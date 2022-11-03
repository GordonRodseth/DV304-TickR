import * as ImagePicker from 'expo-image-picker';
import {React, useState, useEffect} from 'react';
import { Button, Image, StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import {callGoogleNLPAsync} from '../functions/GoogleNLP';
import {callGoogleVisionAsync} from '../functions/GoogleVision';
import {styles} from '../assets/style';
import { getQuestion } from '../services/Database';
import { AddAnswer } from '../services/Database';

//const question= "Why doesn't Hamlet kill Claudius immediately after his conversation with the King's ghost?"
//const teststring="Hamlet's core motivation is to avenge his father's murder but his Christian ethics introduce an inner conflict that drives the play forward";


export default function ScanScreen({navigation,route}){
  const subjectid=route.params.subjectId;
  const assessmentid=route.params.assessmentId;
  const questionid=route.params.questionId;
  const question=route.params.Question;

  //const [question, setQuestion]= useState();
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState();
  const [permissions, setPermissions] = useState(false);
  const [student, setStudent] = useState("");
  //const [keywords, setKeywords] = useState(Array[null]);
  const [key1,setKey1]=useState();
  const [key2,setKey2]=useState();
  const [key3,setKey3]=useState();

  const [marks,setMarks]=useState();

  const Enter=async()=>{
    await AddAnswer( subjectid,assessmentid,questionid,student,status,key1,key2,key3,marks).then(navigation.navigate("AnswersScreen", {subjectId:subjectid, assessmentId:assessmentid,questionId:questionid,Question:question}))

  }
  const askPermissionsAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    } else {
      setPermissions(true);
    }
  };

  const takePictureAsync = async () => {
    const { cancelled, uri, base64 } = await ImagePicker.launchCameraAsync({
      base64: true,
    });

    if (!cancelled) {
      setImage(uri);
      setStatus('Loading...');
      try {
        const result = await callGoogleVisionAsync(base64);
        const result_nlp=await callGoogleNLPAsync(result);
        setKey1(result_nlp[0].name)
        setKey2(result_nlp[1].name)
        setKey3(result_nlp[2].name)
       // setKeywords([result_nlp[0].name,result_nlp[1].name,result_nlp[2].name])
        setStatus(result);
      } catch (error) {
        setStatus(`Error: ${error.message}`);
      }
    } else {
      setImage(null);
      setStatus(null);
    }
  };

  return (
    <ScrollView style={styles.scrollcontainer}>
      <View style={{backgroundColor:'#252526'}}>
      {permissions === false ? (
        <View style={{backgroundColor:'#252526',alignSelf: 'center', marginTop: '50%'}}>
        <Text style={styles.headingwhite}>Please allow TickR to use your camera</Text>
        <Button onPress={askPermissionsAsync} title="Allow" style={styles.button} />
        </View>
      ) : (
        <>
          <TouchableOpacity style={styles.buttonseeother} onPress={()=>navigation.navigate("AnswersScreen", {subjectId:subjectid, assessmentId:assessmentid,questionId:questionid,Question:question})}>
            <Text style={styles.buttontext2}>See Other Student Answers</Text>
          </TouchableOpacity>
        <View style={styles.questioncontainer}>
          <Text style={styles.headingwhite}>Question: {question.number} </Text>
          <Text style={styles.question}>{question.question}</Text>
          <Text style={styles.markwhite}>/{question.marks}</Text>
          <TouchableOpacity style={styles.button} onPress={takePictureAsync} title="Scan an Answer">
            <Text style={styles.buttontext}>Scan an Answer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonseeother} onPress={()=>navigation.navigate("AnswersScreen", {subjectId:subjectid, assessmentId:assessmentid,questionId:questionid,Question:question})}>
            <Text style={styles.buttontext3}>See Other Student Answers</Text>
          </TouchableOpacity>

        </View>


          {status && 
                    < View style={styles.answercontainer}>
                  
          {image && <Image style={styles.image} source={{ uri: image }} />}

                      <View style={styles.answertextcontainer}>
                        <Text style={styles.answertext}>{status}</Text>
                      </View>
                      
                    </View>
                    }

          {key1 && 
          <View>

                    <View style={styles.keycontainer}>
                    
                      <Text style={styles.key}>{key1}</Text>
                      <Text style={styles.key}>{key2}</Text>
                      <Text style={styles.key}>{key3}</Text>
                    </View>
            </View>
                    }
          <View style={styles.markcontainer}>
            <View>

              <TextInput style={styles.markinput} placeholder={"Marks"} keyboardType='numeric' onChangeText={setMarks}></TextInput>
            </View>
            <View>
              <TextInput style={styles.studentnameinput} onChangeText={setStudent} placeholder='Student'></TextInput>
            </View>

          </View>
          <TouchableOpacity style={styles.scanenterbutton} onPress={Enter}>
            <Text style={styles.buttontext2}>Enter</Text>
          </TouchableOpacity>

          
        </>
      )}
      </View>
    </ScrollView>
  );
}
