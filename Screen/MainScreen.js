import {React, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './Style/MainStyle';
import {firebase} from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DrawerNavigation from './Navigations/DrawerNavigation';

function MainScreen({navigation}) {
  const [srcName, setSrcName] = useState('');
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();

  useEffect(() => {
    db.collection('users')
      .doc(currentUser.email)
      .get()
      .then(doc => {
        const srcName = doc.data().src_name;
        setSrcName(srcName);
      })
      .catch(error => {
        console.log('Error getting document:', error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={styles.subContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon
              name="dehaze"
              size={30}
              color="white"
              style={{paddingRight: 13}}></Icon>
          </TouchableOpacity>
          <Text style={styles.text}>{srcName}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('검색')}>
          <Icon name="search" size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              navigation.navigate('자유게시판', {
                board: '자유게시판',
                src: srcName,
              })
            }>
            <Text style={styles.text}>자유게시판</Text>
            <Icon name="people" size={65} color="white"></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              navigation.navigate('전체게시판', {
                board: '전체게시판',
                src: srcName,
              })
            }>
            <Text style={styles.text}>전체게시판</Text>
            <Icon name="house" size={65} color="skyblue"></Icon>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              navigation.navigate('택시 타자', {
                board: '택시 타자',
                src: srcName,
              })
            }>
            <Text style={styles.text}>택시 타자</Text>
            <Icon name="local-taxi" size={65} color="green"></Icon>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.Button}
            onPress={() =>
              navigation.navigate('같이 먹자', {
                board: '같이 먹자',
                src: srcName,
              })
            }>
            <Text style={styles.text}>같이 먹자</Text>
            <Icon name="delivery-dining" size={65} color="orange"></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('마이페이지')}>
          <Icon name="contact-page" size={35} color="white"></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('글쓰기', {srcName})}>
          <Icon name="brush" size={35} color="white"></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('알림')}>
          <Icon name="alarm-on" size={35} color="white"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainScreen;
