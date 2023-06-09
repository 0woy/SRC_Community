import {React, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyPage from '../SubScreen/MyPage';
import MainStack from './MainStack';
import DrawerBar from '../SubScreen/DrawerBar';
import {getUser, subscribeAuth} from '../../lib/user';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({setUser}) => {
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
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
