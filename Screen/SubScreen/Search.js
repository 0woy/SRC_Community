import {React, useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {firebase} from '@react-native-firebase/auth';

function Search({navigation}) {
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
    <View>
      <Text style={{color: 'black'}}>Hello</Text>
    </View>
  );
}

export default Search;
