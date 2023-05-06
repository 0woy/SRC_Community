import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TextInput} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import firebase from '@react-native-firebase/app';
import styles from '../Style/WriteStyles';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';

const WriteBoard = ({navigation}) => {
  // 게시판 선택을 위한 코드
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: '자유게시판'},
    {key: '2', value: '전체게시판'},
    {key: '3', value: '같이 먹자'},
    {key: '4', value: '택시  타자'},
  ];

  const [srcName, setSrcName] = useState('');
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [board, setBoard] = useState('자유게시판'); // default: 자유게시판
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;

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

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .where('board', '==', selected) // filter posts by board
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        if (querySnapshot) {
          const posts = [];
          querySnapshot.forEach(doc => {
            posts.push({...doc.data(), id: doc.id});
          });
          setPosts(posts);
          setSelected('');
          setBoard('');
        } else {
          console.log('No documenets fond matching the query');
        }
      });
    setSelected('');
    return () => unsubscribe();
  }, [board]); // board의 상태가 바뀔 때마다 실행

  // 게시글 작성 완료
  const handleSubmit = async () => {
    if (!selected) {
      Alert.alert('게시글 업로드 불가', '게시판을 선택해 주세요.');
      return;
    }
    if (!title || !content) {
      Alert.alert('게시글 업로드 불가', '모든 필드를 입력해 주세요.');
      return;
    }
    setBoard(selected);
    try {
      const currentUser = firebase.auth().currentUser;
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection(`posts_${selected}`).add({
        // store post in a collection named `posts_${board}`
        title,
        content,
        createdAt,
        userId: currentUser.uid,
        board: selected, // add board to the post data
        src_name: srcName,
      });
      navigation.navigate('메인화면');
    } catch (error) {
      console.log(error);
    }
    setTitle('');
    setContent('');
    setSelected('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.BackButton}
          onPress={() => navigation.navigate('메인화면')}>
          <Text style={styles.BackText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.text}>게시글 작성</Text>
        <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
          <Text style={styles.submitText}>완료</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.SelectView}>
        <SelectList
          placeholder="게시판 선택"
          notFoundText="해당 게시판은 없습니다."
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{
            backgroundColor: 'purple',
            marginRight: 80,
          }}
          defaultOption={('1', '자유게시판')}
          searchPlaceholder="검색"
          dropdownStyles={{backgroundColor: 'gray', marginRight: 80}}
        />
      </View>
      <View>
        <TextInput
          style={styles.Title}
          value={title}
          onChangeText={setTitle}
          placeholder="제목"
          placeholderTextColor={'black'}
        />
        <TextInput
          value={content}
          multiline={true}
          textAlignVertical={'top'}
          style={styles.Content}
          onChangeText={setContent}
          placeholder="내용을 입력하세요.."
          placeholderTextColor={'black'}
        />
      </View>
    </View>
  );
};

export default WriteBoard;
