import {React, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import FindUserScreen from '../FindUserScreen';
import {useUserContext} from './UserContext';
import WelcomeScreen from '../WelcomeScreen';

const Stack = createStackNavigator();

const StackNavigation = ({setUser}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="로그인"
        component={SignInScreen}
        initialParams={{setUser}}
      />
      <Stack.Screen name="회원가입" component={SignUpScreen} />
      <Stack.Screen name="아이디/비밀번호찾기" component={FindUserScreen} />
      <Stack.Screen
        name="회원등록"
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
