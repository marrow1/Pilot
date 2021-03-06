import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import colors from '../utility/colors';
import AppLoading from 'expo-app-loading';
import { useFonts, Ubuntu_400Regular, Ubuntu_500Medium} from '@expo-google-fonts/ubuntu';
import { TouchableRipple } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import axios from 'axios';

/* Bottom Tab screens */
import PostScreen from "../screens/PostScreen";
import SearchScreen from "../screens/SearchScreen";
import CameraScreen from "../screens/CameraScreen";
import MessageScreen from "../screens/MessageScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

function HomeScreen({ route }){

  const email = route.params;
  //const emailvalue = JSON.stringify(email);
  const emailobj = route.params.email;
  const [model, setModel] = useState({});

  //const [fullname,setFullName] = useState("");
  
    useEffect(() =>{
    const getUserData = async () => {
       try {
        const response = await axios(`http://192.168.1.6/webapi/userHomeScreenData.php?email=${emailobj}`);
        console.log(response.data)
        setModel(response.data);
       }catch(err){
       console.log(err);
       }
    };
    getUserData()
    }, [emailobj]);


    let [fontsLoaded] = useFonts({ Ubuntu_400Regular, Ubuntu_500Medium });

    if (!fontsLoaded) {
      return <AppLoading />;
    } else {  
      return ( 
      <View style={{flex: 1}}>

<ScrollView contentContainerStyle={styles.container}>
          <StatusBar style="auto" />
          <Text style={styles.titleText}>Hi, {model.fullname}</Text>
        </ScrollView>
       

      <Tab.Navigator>
         <Tab.Screen name="Post" component={PostScreen} />
         <Tab.Screen name="Search" component={SearchScreen} />
         <Tab.Screen name="Camera" component={CameraScreen} />
         <Tab.Screen name="Message" component={MessageScreen} />
         <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>

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

export default HomeScreen;