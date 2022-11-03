import {React} from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Switch, Button,TextInput ,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LogIn from '../Components/LogIn';
import SignUp from '../Components/SignUp';
import { styles } from '../assets/style';

const Tab = createBottomTabNavigator();

const VerificationTabs=()=>{
    return(
  
      <Tab.Navigator  
      initialRouteName="Log In"
      screenOptions={{
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'black',
        tabBarStyle:
          styles.tabBarStyle,
        
          
      }}
        >
        <Tab.Screen 
          name="Log In" 
          component={LogIn} 
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("../assets/icons/login.svg")} style={{width: 30, height: 30}} />),

            }}/>
        <Tab.Screen 
          name="Sign Up" 
          component={SignUp} 
          options={{
            headerShown: false,
            tabBarIcon: () => (<Image source={require("../assets/icons/signup.svg")} style={{width: 30, height: 30}} />),

            }}/>
      </Tab.Navigator>
  
    )
  }
export default VerificationTabs;