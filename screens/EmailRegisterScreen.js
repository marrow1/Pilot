import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableWithoutFeedback, Linking } from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';
import axios from 'axios';

function EmailRegisterScreen({ navigation }) {

 const [fullname,setFullName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const [isSubmit, setIsSubmit] = useState(false); 

 const fullnameHandler = (text) =>{
   //Input format validation
   setFullName(text);
  
 }

 const emailHandler = (text) =>{
   //Here i will add more email format vaidation
   setEmail(text);
 }

 const passwordHandler = (text) =>{
   //Here i will add password hash algos..
   setPassword(text);
 }

 useEffect(()=>{
   const authenticate = async()=>{
    axios.post("http://192.168.1.6/slateweb/registerUser.php", JSON.stringify({
      fullname: fullname,
      email: email,
      password: password,
    })).then((response)=>{
      console.log(response.data);
      setIsSubmit(false);
      //Navigate user to home after valid register
      if(response.data == "OK"){
        navigation.navigate("Welcome");
      }
      if(response.data == "Fullname is blank"){
        navigation.navigate("Empty FullName Error");
      }
      if(response.data == "Email already exist"){
        navigation.navigate("Email Duplicate Error");

      }
      if(response.data == "Email issue"){
        navigation.navigate("Email Format Error");
      }
   
      if(response.data == "Password is blank"){
       navigation.navigate("Empty Password Error");
      }
      if(response.data == "Password length"){
        navigation.navigate("Password Length Error");
      }
    }).catch((error)=>{
      console.log(error);
    });
   }
   if(isSubmit) authenticate();
 }, [isSubmit])

  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      
      <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>Register here</Text>
        <View style={styles.formContainer}>
        <TextInput placeholder="Full name" keyboardType="default" style={styles.nameInput} 
        maxLength={100} onChangeText={fullnameHandler} />
        <TextInput placeholder="Email address" keyboardType="email-address" style={styles.nameInput} maxLength={100} onChangeText={emailHandler} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.nameInput} 
        maxLength={100} onChangeText={passwordHandler} />
        <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" style={styles.registerButton} 
        onPress={ ()=>setIsSubmit(true) }>
          <Text style={styles.buttonText}>Register here</Text>
        </TouchableRipple>

        <Text style={styles.legalText}>
          By registering you agree to our &nbsp;
          <TouchableWithoutFeedback onPress={()=> Linking.openURL('https://reactnativecode.com')}>
            <Text style={styles.trmText}>terms of services &nbsp;</Text>
          </TouchableWithoutFeedback>
          and &nbsp;
          <TouchableWithoutFeedback onPress={()=> Linking.openURL('https://reactnativecode.com')}>
          <Text style={styles.trmText}>privacy policy.</Text>
      </TouchableWithoutFeedback>
        </Text>

        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:"center",
      backgroundColor: colors.white,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 30,
      width: "100%",
    },
    registerButton: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor:colors.black,
      padding:10,
      width: "100%",
      marginBottom: 15,
      padding: 20,
    },
    buttonText: {
      color: colors.white,
      fontFamily: "Ubuntu_400Regular",
      fontWeight: "normal",
      fontStyle:"normal",
    },
    formContainer:{
      width: "90%",
      padding: 5,
      marginTop: "10%"
    },
    nameInput: {
      backgroundColor: colors.gray,
      borderRadius: 5,
      color: colors.black,
      padding: 10,
      fontFamily: "Ubuntu_400Regular",
      fontSize: 18,
      marginBottom: 8,
      borderWidth: 2,
      borderColor: colors.lightgray,
    },
    emailInput: {
      backgroundColor: colors.gray,
      borderRadius: 5,
      color: colors.black,
      padding: 10,
      fontFamily: "Ubuntu_400Regular",
      fontSize: 18,
      borderWidth: 2,
      borderColor: colors.lightgray,
    },
    legalText: {
      fontFamily: "Ubuntu_400Regular",
      fontWeight: "normal",
      color: colors.black,
      fontSize: 14,
    },
    trmText: {
      color: colors.blue,
      margin: 10,
    },
    titleText: {
      color: colors.black,
      fontFamily: "Ubuntu_400Regular",
      fontWeight: "normal",
      fontStyle:"normal",
      fontSize: 30,
      marginTop: "20%",
      marginBottom:0,
    }
  });

export default EmailRegisterScreen;