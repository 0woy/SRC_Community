import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TextInput} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import firebase from '@react-native-firebase/app';
import styles from '../Style/WriteStyles';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const WriteBoard = ({navigation}) => {
  // 게시판 선택을 위한 코드
  const [selected, setSelected] = React.useState('');
  const data = [
    {key: '1', value: '자유게시판'},
    {key: '2', value: '전체게시판'},
    {key: '3', value: '배달'},
    {key: '4', value: '택시'},
  ];

  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [board, setBoard] = useState('자유게시판'); // default: 자유게시판
  const db = firebase.firestore();

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
        <TouchableOpacity style={styles.Button} onPress={handleSubmit}>
          <Text style={styles.submitText}>완료</Text>
        </TouchableOpacity>
        {/* {posts.map(post => (
          <View key={post.id}>
            <Text style={styles.text}>{post.title}</Text>
            <Text style={styles.text}>{post.content}</Text>
            <Text style={styles.text}>{post.userId}</Text>
          </View>
        ))} */}
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          justifyContent: 'center',
        }}>
        <SelectList
          placeholder="게시판 선택"
          notFoundText="해당 게시판은 없습니다."
          setSelected={val => setSelected(val)}
          data={data}
          save="value"
          boxStyles={{
            backgroundColor: 'gray',
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
