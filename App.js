/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Screen/Navigations/Stack';
import MainStack from './Screen/Navigations/MainStack';

function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}

export default App;
