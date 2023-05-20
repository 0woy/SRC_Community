/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import {React, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Screen/Navigations/Stack';
import MainStack from './Screen/Navigations/MainStack';
import {UserContextProvider} from './Screen/Navigations/UserContext';

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContextProvider>
      <NavigationContainer>
        {user ? <MainStack /> : <StackNavigation setUser={setUser} />}
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
