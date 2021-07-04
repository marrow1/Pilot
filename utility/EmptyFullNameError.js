import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView, TouchableWithoutFeedback, Linking} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../utility/colors';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';

function EmptyFullNameError({ navigation }){

  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return(
    <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.titleText}>Register here</Text>
        <View style={styles.formContainer}>
        <Text style={styles.warningSymbol}>🚨</Text>
       <Text style={styles.errMessage}>Your name can't be blank. Try again!</Text>
        <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" style={styles.registerButton} 
        onPress={()=>{navigation.goBack();}}>
          <Text style={styles.buttonText}>Enter name again</Text>
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
    backgroundColor:colors.white,
    padding:10,
    width: "100%",
    marginBottom: 15,
    padding: 20,
  },
  buttonText: {
    color: colors.black,
    fontFamily: "Ubuntu_400Regular",
    fontWeight: "normal",
    fontStyle:"normal",
  },
  formContainer:{
    width: "90%",
    padding: 5,
    marginTop: "10%",
    alignItems: "center",
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
  },
  warningSymbol: {
    fontSize: 40,
  },
  errMessage: {
    color: colors.black,
    fontFamily: "Ubuntu_400Regular",
    fontWeight: "normal",
    fontStyle:"normal",
    fontSize: 16,
    marginTop: 10,
    marginBottom:10,
    padding: 18,
    borderRadius: 4,
    backgroundColor: colors.redbackground,
    color: colors.red,
    width: "100%"
  }
 
});


export default EmptyFullNameError;