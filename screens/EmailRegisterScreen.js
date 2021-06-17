import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';


function EmailRegisterScreen() {

  let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
       <Text>Email Register Screen</Text>
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
    mainLogo: {
      fontFamily: "Ubuntu_500Medium",
      fontSize: 50,
      color:colors.black,
      alignItems: "center",
      color: colors.white,
    },
    buttonContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'absolute',
      bottom: 30,
      width: "90%",
    },
    continueButton: {
      color: colors.black,
      borderRadius: 5,
      padding: 8,
      backgroundColor:colors.white
    },
    buttonText: {
      color: colors.black,
      fontFamily: "Ubuntu_400Regular",
      fontWeight: "bold"
    }
  });

export default EmailRegisterScreen;