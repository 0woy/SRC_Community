import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../MainScreen';
import WriteBoard from '../SubScreen/Posts/WriteBorard';
import AllBoard from '../SubScreen/AllBoard';
import Search from '../SubScreen/Search';
import PostDetails from '../SubScreen/Posts/PostDetails';
import ModifyPost from '../SubScreen/Posts/ModifyPost';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      {/*presentation: modal 화면 전환시 아래에서 위로 올라옴 */}
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen
          name="메인"
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
        <Stack.Screen
          name="검색"
          options={{headerShown: false, gestureEnabled: false}}
          component={Search}
        />
        <Stack.Screen
          name="게시글"
          options={{headerShown: false, gestureEnabled: false}}
          component={PostDetails}
        />
        <Stack.Screen
          name="게시글 수정"
          options={{headerShown: false, gestureEnabled: false}}
          component={ModifyPost}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStack;
