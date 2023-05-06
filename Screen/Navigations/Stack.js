import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';
import MainScreen from '../MainScreen';
import FindUserScreen from '../FindUserScreen';
import WriteBoard from '../SubScreen/WriteBorard';
import AllBoard from '../SubScreen/AllBoard';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="로그인"
        component={SignInScreen}
      />
      <Stack.Screen
        name="메인화면"
        options={{headerShown: false, gestureEnabled: false}}
        component={MainScreen}
      />
      <Stack.Screen name="회원가입" component={SignUpScreen} />
      <Stack.Screen name="아이디/비밀번호찾기" component={FindUserScreen} />

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
    </Stack.Navigator>
  );
};

export default StackNavigation;
