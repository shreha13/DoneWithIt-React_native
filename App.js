import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppNavigator from './app/navigation/AppNavigator';
import AuthNavigator from './app/navigation/AuthNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import RegisterScreen from './app/screens/RegisterScreen';
import Screen from './app/screens/Screen'


export default function App() {

  return (
    <NavigationContainer theme={NavigationTheme}>
      <AppNavigator />
    </NavigationContainer>

  );
}
