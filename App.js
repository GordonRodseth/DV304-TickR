import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ScanScreen from "./Screens/ScanScreen";
import SubjectsScreen from './Screens/SubjectsScreen';
import StackNav from './Navigation/Stack';

//import UserVerification from "./Screens/UserVerificationScreen";


 export default function App(){
  return(
    <NavigationContainer>
      
        <StackNav />
      
    </NavigationContainer>
    
  )
 } 
  
