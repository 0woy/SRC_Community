import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import FindUserScreen from '../FindUserScreen';
import MainScreen from '../MainScreen';
import WriteBoard from '../SubScreen/WriteBorard';
import AllBoard from '../SubScreen/AllBoard';
import {useUserContext} from './UserContext';
import WelcomeScreen from '../WelcomeScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  const {user} = useUserContext();
  return (
    <Stack.Navigator>
      {user ? (
        <>
          <Stack.Screen
            name="메인화면"
            options={{headerShown: false, gestureEnabled: false}}
            component={MainScreen}
          />

          <Stack.Screen
            name="자유게시판"
            options={{headerShown: false, gestureEnabled: false}}
            component={AllBoard}
          />
          <Stack.Screen
            name="전체게시판"
            options={{headerShown: false, gestureEnabled: false}}
            component={AllBoard}
          />
          <Stack.Screen
            name="택시 타자"
            options={{headerShown: false, gestureEnabled: false}}
            component={AllBoard}
          />
          <Stack.Screen
            name="같이 먹자"
            options={{headerShown: false, gestureEnabled: false}}
            component={AllBoard}
          />
          <Stack.Screen
            name="글쓰기"
            options={{headerShown: false, gestureEnabled: false}}
            component={WriteBoard}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="로그인"
            component={SignInScreen}
          />
          <Stack.Screen name="회원가입" component={SignUpScreen} />
          <Stack.Screen name="아이디/비밀번호찾기" component={FindUserScreen} />
          <Stack.Screen
            name="회원등록"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
