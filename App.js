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
import {getUser, subscribeAuth} from './lib/user';

function App() {
  useEffect(() => {
    // 컴포넌트 첫 로딩 시 로그인 상태를 확인하고 UserContext에 적용
    const unsubscribe = subscribeAuth(async currentUser => {
      // 여기에 등록한 함수는 사용자 정보가 바뀔 때마다 호출되는데
      // 처음 호출될 때 바로 unsubscribe해 한 번 호출된 후에는 더 이상 호출되지 않게 설정
      unsubscribe();
      if (!currentUser) {
        return;
      }
      const profile = await getUser(currentUser.email);
      if (!profile) {
        return;
      }
      setUser(profile);
    });
  }, [setUser]);

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
