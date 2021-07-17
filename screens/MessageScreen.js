import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Text, ScrollView} from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';

function MessageScreen(){

    let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
  
      return ( 
        <View style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.titleText}>This is Message Screen</Text>
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

export default MessageScreen;