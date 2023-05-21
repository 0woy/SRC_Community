import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyPage from '../SubScreen/MyPage';
import MainStack from './MainStack';
import DrawerBar from '../SubScreen/DrawerBar';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({setUser}) => {
  console.log(setUser);
  return (
    <Drawer.Navigator
      initialRouteName="메인화면"
      drawerPositon="left"
      backBehavior="history"
      screenOptions={{
        drawerActiveBackgroundColor: '#fb8c00',
        drawerActiveTintColor: 'white',
        headerShown: false,
        drawerStyle: {
          height: '80%',
          borderRadius: 10,
          marginTop: '5%',
        },
      }}
      drawerContent={props => <DrawerBar {...props} setUser={setUser} />}>
      <Drawer.Screen
        name="메인화면"
        component={MainStack}
        options={{title: '메인화면'}}
      />
      {/* <Drawer.Screen
        name="마이페이지"
        component={MyPage}
        option={{title: '마이페이지'}}
      />
      <Drawer.Screen
        name="작성한 게시글"
        component={MyPage}
        option={{title: '작성한 게시글'}}
      />
      <Drawer.Screen
        name="댓글 단 게시글"
        component={MyPage}
        option={{title: '댓글 단 게시글'}}
      />
      <Drawer.Screen
        name="이메일 변경"
        component={MyPage}
        option={{title: '이메일 변경'}}
      />
      <Drawer.Screen
        name="로그아웃"
        component={MyPage}
        option={{title: '로그아웃'}}
      />
      <Drawer.Screen
        name="회원 탈퇴"
        component={MyPage}
        option={{title: '회원 탈퇴'}}
      /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
