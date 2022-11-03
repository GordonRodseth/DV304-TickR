import { db } from '../firebase';
import {collection, doc,getDocs,setDoc, Timestamp, onSnapshot, QuerySnapshot, query, where, getDoc, deleteDoc, updateDoc} from '@firebase/firestore'
import { getFirestore } from '@firebase/firestore';
import { useState, useEffect } from 'react';
import { isLoading } from 'expo-font';
import { getStorage, ref, getDownloadURL, uploadBytes } from '@firebase/storage';

import { async } from '@firebase/util';
import { auth } from '../firebase';
import { firebase } from '@react-native-firebase/auth';
import { deleteUser, getAuth } from '@firebase/auth';

export const createUserOnRegister = async(username) => {
    //document reference: doc(firestore init, collection name, optional - document name/id)
    
    const userRef = doc(db, 'Teachers', auth.currentUser.uid)
    //await firebase.auth().currentUser.updateProfile({displayName:username});
    //create data
    const userData={
        id:auth.currentUser.uid,
        displayName:username,
        role:'user',
    }
    //set a document: setDoc(document reference, data we want to set, any additional options like merge)
    return setDoc(userRef, userData)
}


export const getSubjectsforUser=async()=>{
    const subjects=[];
  
    const subjectSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects"));

    subjectSnap.forEach(async(subject)=>{
    
        subjects.push(subject.data());

        
    })

    return subjects;
}

export const getStudentsforSubject=async(subjectid)=>{
    const students=[];
  
    const studentsSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Students"));

    studentsSnap.forEach(async(student)=>{
    
        students.push(student.data());

        
    })

    return students;
}

export const getAssessmentsforSubject=async(subjectid)=>{
    const assessments=[];
  
    const assessmentsSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Assessments"));

    assessmentsSnap.forEach(async(assessment)=>{
    
        assessments.push(assessment.data());

        
    })

    return assessments;
}

export const getQuestionsforAssessment=async(subjectid,assessmentid)=>{
    const questions=[];
  
    const questionsSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Assessments",assessmentid,"Questions"));

    questionsSnap.forEach(async(question)=>{
    
        questions.push(question.data());

        
    })

    return questions;
}
export const getQuestion=async(subjectid,assessmentid,questionid)=>{
    const questions=[];
  
    const questionsSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Assessments",assessmentid,"Questions", questionid));

    questionsSnap.forEach(async(question)=>{
    
        questions.push(question.data());

        
    })

    return questions[0];
}

export const getAnswers=async(subjectid,assessmentid,questionid)=>{
    const answers=[];
  
    const answersSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Assessments",assessmentid,"Questions", questionid,"Answers"));

    answersSnap.forEach(async(answer)=>{

        answers.push(answer.data());

        
    })

    return answers;
}

export const getAnswer=async(subjectid,assessmentid,questionid,answerid)=>{
    const answers=[];
  
    const answersSnap = await getDocs(collection(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Assessments",assessmentid,"Questions", questionid,"Answers"));

    answersSnap.forEach(async(answer)=>{

        answers.push(answer.data());

        
    })

    return answers;
}

export const AddSubject=async( name, grade)=>{

    await setDoc(doc(db, "Teachers", auth.currentUser.uid,"Subjects",name+'Grade'+grade), {
        name: name,
        grade: grade,
        id: name+'Grade'+grade
      });

    return
}

export const AddStudent=async( name, subjectid)=>{

    await setDoc(doc(db, "Teachers", auth.currentUser.uid,"Subjects", subjectid, "Students",name), {
        name: name,
        id: name,
      });

    return
}

export const AddAssessment=async( name, subjectid)=>{

    await setDoc(doc(db, "Teachers", auth.currentUser.uid,"Subjects", subjectid, "Assessments", name), {
        name: name,
        id: name
      });

    return
}

export const AddQuestion=async(subjectid,assessmentid, questiontext, questionno,markallocation)=>{

    await setDoc(doc(db, "Teachers", auth.currentUser.uid,"Subjects", subjectid, "Assessments",assessmentid, "Questions",questionno), {
        number: questionno,
        question: questiontext,
        marks: markallocation,
        id: questionno
      });

    return
}

export const AddAnswer=async(subjectid,assessmentid, questionid, studentid, answertext, key1, key2, key3, marks)=>{
    
    await setDoc(doc(db, "Teachers",auth.currentUser.uid,"Subjects",subjectid,"Assessments",assessmentid,"Questions", questionid,"Answers",studentid+questionid), {
        student: studentid,
        question: questionid,
        answer: answertext,
        keyword1: key1,
        keyword2: key2,
        keyword3: key3,
        mark: marks,
        id: studentid+questionid,
      });

    return
}