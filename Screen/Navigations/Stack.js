import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import MainScreen from '../MainScreen';
import FindUserScreen from '../FindUserScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="로그인" component={SignInScreen} />
      <Stack.Screen name="회원가입" component={SignUpScreen} />
      <Stack.Screen name="아이디/비밀번호찾기" component={FindUserScreen} />
      <Stack.Screen name="메인화면" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
