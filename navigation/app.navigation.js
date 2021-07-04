import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import EmailRegisterScreen from '../screens/EmailRegisterScreen';
import EmailLoginScreen from '../screens/EmailLoginScreen';
import EmptyEmailError from '../utility/EmptyEmailError';
import EmailDuplicateError from '../utility/EmailDuplicateError';
import EmailFormatError from '../utility/EmailFormatError';
import EmptyFullNameError from '../utility/EmptyFullNameError';
import EmptyPasswordError from '../utility/EmptyPasswordError';
import PasswordLengthError from '../utility/PasswordLengthError';

const Stack = createStackNavigator();

function AppNavigator() {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ gestureEnabled: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}>
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen  name="Login to continue" component={LoginScreen} />
        <Stack.Screen  name="Create account" component={EmailRegisterScreen} />
        <Stack.Screen  name="Login with email" component={EmailLoginScreen} />

        <Stack.Screen  name="Empty Email Error" component={EmptyEmailError} 
        options={{
        headerShown: false,   
        animationEnabled: true, 
        cardStyle: {backgroundColor: "rgba(0,0,0,0.15)"},
        cardOverlayEnabled: true,  
        cardStyleInterpolator: ({ current: { progress }}) =>{
          return{
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange:[0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          };
        }

      }
    }
        />


      <Stack.Screen  name="Email Duplicate Error" component={EmailDuplicateError} 
        options={{
        headerShown: false,   
        animationEnabled: true, 
        cardStyle: {backgroundColor: "rgba(0,0,0,0.15)"},
        cardOverlayEnabled: true,  
        cardStyleInterpolator: ({ current: { progress }}) =>{
          return{
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange:[0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          };
        }

      }
    }
        />

<Stack.Screen  name="Email Format Error" component={EmailFormatError} 
        options={{
        headerShown: false,   
        animationEnabled: true, 
        cardStyle: {backgroundColor: "rgba(0,0,0,0.15)"},
        cardOverlayEnabled: true,  
        cardStyleInterpolator: ({ current: { progress }}) =>{
          return{
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange:[0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          };
        }

      }
    }
        />

<Stack.Screen  name="Empty FullName Error" component={EmptyFullNameError} 
        options={{
        headerShown: false,   
        animationEnabled: true, 
        cardStyle: {backgroundColor: "rgba(0,0,0,0.15)"},
        cardOverlayEnabled: true,  
        cardStyleInterpolator: ({ current: { progress }}) =>{
          return{
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange:[0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          };
        }

      }
    }
        />

<Stack.Screen  name="Empty Password Error" component={EmptyPasswordError} 
        options={{
        headerShown: false,   
        animationEnabled: true, 
        cardStyle: {backgroundColor: "rgba(0,0,0,0.15)"},
        cardOverlayEnabled: true,  
        cardStyleInterpolator: ({ current: { progress }}) =>{
          return{
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange:[0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          };
        }

      }
    }
        />

<Stack.Screen  name="Password Length Error" component={PasswordLengthError} 
        options={{
        headerShown: false,   
        animationEnabled: true, 
        cardStyle: {backgroundColor: "rgba(0,0,0,0.15)"},
        cardOverlayEnabled: true,  
        cardStyleInterpolator: ({ current: { progress }}) =>{
          return{
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange:[0, 0.25, 0.7, 1]
              })
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp"
              })
            }
          };
        }

      }
    }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;