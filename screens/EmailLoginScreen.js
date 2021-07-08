import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, ScrollView} from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';
import axios from 'axios';

function EmailLoginScreen({ navigation }) {

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const [isSubmit, setIsSubmit] = useState(false); 

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
     axios.post("http://192.168.1.6/slateweb/loginUser.php", JSON.stringify({
       email: email,
       password: password,
     })).then((response)=>{
       console.log(response.data);
       setIsSubmit(false);
       //Navigate user to home after valid register
       if(response.data == "Email exists"){
         navigation.navigate("Home", { email });
       }

       if(response.data == "Login error"){
        navigation.navigate("Login Credentials Error");
      }

       if(response.data == "Email error"){
        navigation.navigate("Invalid email or password");
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
        <Text style={styles.titleText}>Login with email</Text>
        <View style={styles.formContainer}>
        <TextInput placeholder="Email address" keyboardType="default" style={styles.nameInput} maxLength={100} onChangeText={emailHandler} />
        <TextInput placeholder="Password" keyboardType="default" secureTextEntry={true} style={styles.nameInput} maxLength={100}onChangeText={passwordHandler} />
        <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" style={styles.loginButton} onPress={ ()=>setIsSubmit(true) }>
          <Text style={styles.buttonText}>Login here</Text>
        </TouchableRipple>
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
  loginButton: {
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
    marginTop: "15%"
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
  titleText: {
    color: colors.black,
    fontFamily: "Ubuntu_400Regular",
    fontWeight: "normal",
    fontStyle:"normal",
    fontSize: 30,
    marginTop: "35%",
    marginBottom:0,
  }
  });

export default EmailLoginScreen;