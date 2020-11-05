import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/pages/RootNavigator';

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <RootNavigator />
  </NavigationContainer>
);

export default App;
