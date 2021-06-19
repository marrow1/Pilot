import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import EmailRegisterScreen from '../screens/EmailRegisterScreen';
import EmailLoginScreen from '../screens/EmailLogin';

const Stack = createStackNavigator();

function AppNavigator() {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ gestureEnabled: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,}}>
        <Stack.Screen options={{headerShown: false}} name="Welcome" component={WelcomeScreen} />
        <Stack.Screen  name="Login to continue" component={LoginScreen} />
        <Stack.Screen  name="Create account" component={EmailRegisterScreen} />
        <Stack.Screen  name="Login with email" component={EmailLoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;