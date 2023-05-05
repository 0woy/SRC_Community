import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../MainScreen';
import FreeBoard from '../SubScreen/FreeBoard';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="메인화면"
        options={{headerShown: false}}
        component={MainScreen}
      />
      <Stack.Screen name="자유게시판" component={FreeBoard}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MainStack;
