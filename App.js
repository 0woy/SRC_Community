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
import {UserContextProvider} from './Screen/Navigations/UserContext';
import DrawerNavigation from './Screen/Navigations/DrawerNavigation';

function App() {
  const [user, setUser] = useState(null);
  const handleSignIn = userdata => {
    setUser(userdata);
  };
  return (
    <UserContextProvider>
      <NavigationContainer>
        {user ? (
          <DrawerNavigation setUser={handleSignIn} />
        ) : (
          <StackNavigation setUser={handleSignIn} />
        )}
      </NavigationContainer>
    </UserContextProvider>
  );
}

export default App;
