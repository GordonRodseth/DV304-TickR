
import {StyleSheet} from 'react-native';

// setting up colour pallette

const red = '#E8396E';
const lightblue = '#F6F6FE';
const darklightblue='#72A4DF';
const darkblue='#4A3BC6';
const yellow = '#FAD07E';
const offwhite= '#F6F6FE';
const dark = '#46284E';
const lightergrey='#E4E4E4';
const lightgrey='#333333';
const grey='#252526';
const darkgrey='#1E1E1E'
const green='#67C983';

export const styles = StyleSheet.create({
    scrollcontainer: {
      backgroundColor: darkgrey,
      width:'100%',
      overflow: 'scroll',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity:  0.01,
      shadowRadius: 2.05,
      elevation: 3,
     // height: '100%',
     paddingTop: 5,
     paddingBottom: 25,
      
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'scroll',
      height: '100%',
      paddingTop: 50,
      backgroundColor: grey,
  
    },
    //General text styles
    text: {
      margin: 5,
    },
    headingwhite: {
      margin: 5,
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      
    },
    heading: {
        margin: 5,
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        
      },
      heading2: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',

        
      },
      heading2white: {
        margin: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

        
      },
      heading3: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        
      },


//How the student's answer is displayed
    image: {
        height: 100,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 15,
      },

      answercontainer:{
        padding:25,
        paddingTop: 5,
        backgroundColor: darkgrey,
        color: 'white',
        width: '100%',
      },

    answertextcontainer: {
      backgroundColor: lightgrey,
      borderWidth: 2,
      borderRadius: 5,
      padding: 5,
    },
    answertext: {
        margin: 5,
        color: 'white',
      },

//Displaying Insights pulled from the text
    key: {
      paddingHorizontal: 20,
      paddingVertical:5,
      backgroundColor: darkgrey,
      borderRadius: 15,
      margin: 5,
      alignContent: 'center',
      fontSize: 10,
      color: green,
      width: '25%',
      fontWeight: 'regular'
    },
    keycontainer: {
      flexDirection: 'row',
      paddingTop: 5,
      paddingBottom:5,
      paddingLeft: 15,
      paddingRight:5,
      marginBottom:15,
    },

//Displaying the Question
    question:{
      margin: 5,
      marginBottom: 25,
      fontStyle: 'italic',
      color: offwhite
    },
    questioncontainer:{
      borderWidth: 1,
      width: '100%',
      padding: 15,
      backgroundColor: lightgrey,
    },
    question2:{
      margin: 5,
      marginBottom: 25,
      fontStyle: 'italic',
      color: 'black'
    },

//Marking

    markinput:{
      backgroundColor: lightblue,
      width: 100,
      alignSelf: 'center',
      margin: '5%',
      borderRadius: 15,
      padding: 5,
      borderWidth:1,
    },
    markcontainer:{
      flexDirection: 'row',
    },

    //Button styles
    button:{
        borderRadius:25,
        backgroundColor:lightgrey,
        alignContent: 'center',
        padding: 10,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: darkgrey,

      },
    buttontext:{
        color:'white',
        alignSelf: 'center',
        fontWeight:'bold',
    },
    buttontext2:{
      color:darkgrey,
      alignSelf: 'center',
      fontWeight:'bold',
  },
  buttontext3:{
    color:offwhite,
    alignSelf: 'center',
    fontWeight:'bold',
},
  buttonseeother:{
    marginTop:15,
  },

    //selecting subject
    subjectselect:{
        backgroundColor: yellow
        ,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: 'black',
        padding: 15,
        borderRadius: 25,
        width: '90%',
        marginHorizontal:'5%',
        marginVertical: '2%',

    },
        //selecting subject
        subjectselect2:{
          backgroundColor: green
          ,
          borderWidth: 1,
          borderBottomWidth: 2,
          borderColor: 'black',
          padding: 15,
          borderRadius: 25,
          width: '90%',
          marginHorizontal:'5%',
          marginVertical: '2%',
  
      },

      subjectselect3:{
        backgroundColor: darklightblue
        ,
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: 'black',
        padding: 15,
        borderRadius: 25,
        width: '90%',
        marginHorizontal:'5%',
        marginVertical: '2%',

    },
    touchopacity:{
      backgroundColor: yellow,
      borderWidth: 1,
      borderBottomWidth: 2,
      borderColor: 'black',
      padding: 15,
      borderRadius: 25,
      width: '90%',
      marginHorizontal:'5%',
      marginVertical: '2%',

  },

    //selecting assessment
    assessmentselect:{
      backgroundColor: offwhite,
      borderWidth: 1,
      borderBottomWidth: 2,
      borderColor: darklightblue,
      padding: 15,
      borderRadius: 10,
      width: '90%',
      marginLeft:'5%',
      marginRight: '5%',

  },
  
    //selecting questions
    questionselect:{
      backgroundColor: offwhite,
      borderWidth: 1,
      borderBottomWidth: 2,
      borderColor: darklightblue,
      padding: 15,
      borderRadius: 10,
      width: '90%',
      marginLeft:'5%',
      marginRight: '5%',

  },
  input :{
    backgroundColor: lightblue,
    width: '75%',
    alignSelf: 'center',
    margin: '5%',
    borderRadius: 15,
    borderWidth:1,
    padding: 5,
  },
  studentnameinput :{
    backgroundColor: lightblue,
    width: 200,
    alignSelf: 'center',
    margin: '5%',
    borderRadius: 15,
    padding: 5,
    borderWidth:1,
  },

  signout:{
    borderRadius:25,
    alignContent: 'center',
    alignSelf: 'flex-end',
    margin: '5%',
    padding: 5,

  },

  signouttext:{
    margin: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },

  tabBarStyle:{
    backgroundColor:grey,
    padding:10,
    paddingBottom:15,
    height: 70,
  },
  iconbutton:{
    borderRadius:50,
    backgroundColor:lightblue,
    alignSelf: 'center',
    alignContent: 'center',
    padding:7,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: darkgrey,
    width: 50,
    height:50,
    marginTop: 10,
    marginBottom:10,

  },
  iconbuttontext:{
    alignSelf: 'center',
    fontSize: 20,
  },
  marks:{
    alignSelf: 'flex-end',
    fontSize: 20,
  },
  markwhite:{
    alignSelf: 'flex-end',
    fontSize: 20,
    color: 'white',
  },
  scanenterbutton:{
    borderRadius:25,
    backgroundColor:green,
    alignContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderBottomWidth: 2,
    borderColor: grey,
    marginBottom:20,
  }
  
  });
  