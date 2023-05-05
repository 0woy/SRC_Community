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
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => navigation.navigate('자유게시판')}>
            <Text style={styles.text}>자유게시판</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.text}>전체게시판</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.text}>택시</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button}>
            <Text style={styles.text}>배달</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.subButton}
          onPress={() => navigation.navigate('글쓰기')}>
          <Text style={{color: 'black'}}>미워</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainScreen;
