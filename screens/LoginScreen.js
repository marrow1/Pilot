import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';


function LoginScreen({ navigation }) {

  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableRipple rippleColor="rgba(178, 186, 187, .32)" style={styles.continueButtonGoogle} onPress={() => console.log('Google Button')}>
          <Text style={styles.googlebuttonText} uppercase={false}>Sign in with Google</Text>
        </TouchableRipple>
        <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" style={styles.continueButtonFB} onPress={() => console.log('Facebook Button')}>
          <Text style={styles.buttonText}>Continue with Facebook</Text>
        </TouchableRipple>
        <TouchableRipple rippleColor="rgba(244, 246, 246, .32)" style={styles.continueButton} onPress={() => navigation.navigate('Create account')}>
          <Text style={styles.buttonText}>Sign up with Email</Text>
        </TouchableRipple>

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
    continueButton: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor:colors.black,
      padding:10,
      width: "90%",
      marginBottom: 15,
      padding: 20,
    },
    buttonText: {
      color: colors.white,
      fontFamily: "Ubuntu_400Regular",
      fontWeight: "normal",
      fontStyle:"normal",
    },
    googlebuttonText: {
      color: colors.black,
      fontFamily: "Ubuntu_400Regular",
      fontWeight: "normal",
      fontStyle:"normal",
    },
    continueButtonGoogle: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor:colors.gray,
      padding:10,
      width: "90%",
      marginBottom: 15,
      padding: 20,
    },
    continueButtonFB: {
      alignItems: "center",
      borderRadius: 5,
      backgroundColor:colors.facebook,
      padding:10,
      width: "90%",
      marginBottom: 15,
      padding: 20,
    },
  });

export default LoginScreen;