import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Alert,
  TextInput,
  Platform,
  Pressable,
  Image,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import firebase from '@react-native-firebase/app';
import styles from '../../Style/WriteStyles';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {launchImageLibrary} from 'react-native-image-picker'; // 이미지
import Icon from 'react-native-vector-icons/MaterialIcons';

const WriteBoard = ({navigation, route}) => {
  // 게시판 선택을 위한 코드
  const [selected, setSelected] = useState('');
  const data = [
    {key: '1', value: '자유게시판'},
    {key: '2', value: '전체게시판'},
    {key: '3', value: '같이 먹자'},
    {key: '4', value: '택시 타자'},
  ];

  const [srcName, setSrcName] = useState(route.params.srcName);
  const [posts, setPosts] = useState([]);
  const [response, setResponse] = useState(null); // 이미지 관리 state
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [board, setBoard] = useState(route.params); // default: 자유게시판
  const db = firebase.firestore();
  const currentUser = firebase.auth().currentUser;

  useEffect(() => {
    setSelected('');
  }, []);
  const onSelectImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 512,
        maxHeight: 512,
        includeBase64: Platform.OS === 'android',
      },
      res => {
        if (res.didCancel) return;
        setResponse(res);
      },
    );
  };

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
      setTitle('');
      setContent('');
      setBoard('');
      navigation.navigate(selected, {
        board: selected,
        src: srcName,
      });
      setSelected('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="close" size={30} color="black"></Icon>
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
            backgroundColor: '#D1D1D1',
            marginRight: 80,
          }}
          searchPlaceholder="검색"
          dropdownStyles={{backgroundColor: '#C6C6C6', marginRight: 80}}
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
      <View>
        {response && <Image source={{uri: response?.assets[0]?.uri}} />}
        <Pressable onPress={onSelectImage}>
          <Icon name="camera-alt" size={30} color="black"></Icon>
        </Pressable>
      </View>
    </View>
  );
};

export default WriteBoard;
