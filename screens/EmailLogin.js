import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text} from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';


function EmailLoginScreen() {

  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.formContainer}>
        <TextInput placeholder="Email address" keyboardType="email-address" style={styles.nameInput} maxLength={100} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.nameInput} maxLength={100} />
        <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" style={styles.loginButton} onPress={() => console.log('Login button clicked!')}>
          <Text style={styles.buttonText}>Login here</Text>
        </TouchableRipple>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
    }
  });

export default EmailLoginScreen;