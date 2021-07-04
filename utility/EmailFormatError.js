import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import AppLoading from 'expo-app-loading';
import colors from '../utility/colors';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function EmailFormatError({ navigation }){

  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return(
    <View style={{flex: 1}}>
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.formContainer}>
      <MaterialCommunityIcons name="email-minus" size={55} color="black" />
       <Text style={styles.errMessage}>This email format is incorrect. Try again!</Text>
      <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" 
      style={styles.registerButton} onPress={()=>{navigation.goBack();}} >
        <Text style={styles.buttonText}>Enter correct email</Text>
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
    marginTop: "65%",
    alignItems: "center",
  },
  errMessage: {
    textAlign: "center",
    color: colors.black,
    fontFamily: "Ubuntu_400Regular",
    fontWeight: "normal",
    fontStyle:"normal",
    fontSize: 17,
    marginTop: 20,
    marginBottom: 30
  }
 
});


export default EmailFormatError;