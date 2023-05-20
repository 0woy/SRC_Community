import {React, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './Style/MainStyle';
import {firebase} from '@react-native-firebase/auth';

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
        <Text style={styles.text}>{srcName}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('검색')}>
          <Text style={{color: 'white'}}>Search</Text>
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
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate('메인화면')}>
          <Text style={{color: 'black'}}>홈</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate('글쓰기')}>
          <Text style={{color: 'black'}}>글쓰기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate('알림')}>
          <Text style={{color: 'black'}}>알림</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainScreen;
