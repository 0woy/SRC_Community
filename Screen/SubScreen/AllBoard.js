import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList, BackHandler} from 'react-native';
import styles from '../Style/BoardStyles';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AllBoard = ({navigation, route}) => {
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();
  let unsubscribe = '';
  const board = route.params && route.params.board;
  const srcName = route.params && route.params.src;

  useEffect(() => {
    let query = db.collection(`posts_${board}`).orderBy('createdAt', 'desc');
    if (board != '전체게시판') {
      query = query.where('src_name', '==', srcName);
    }

    unsubscribe = query.onSnapshot(querySnapshot => {
      const posts = [];
      // 소속 기숙사만 열람가능한 게시판인 경우, 에러가 발생하여 해당 if문 추가하여 solve
      if (querySnapshot) {
        querySnapshot.forEach(doc => {
          posts.push({...doc.data(), id: doc.id});
        });
        setPosts(posts);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    {
      /* 
    글쓰기 페이지에서 글 작성 후 해당 게시판으로 이동한 경우,
    뒤로가기 누를 시 다시 글쓰기 페이지로 돌아가는 것을 막기 위한 코드
    게시판에서 사용자가 뒤로가기를 누르면 메인으로 이동하도록 설정
    */
    }
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        navigation.navigate('메인');
        return true; // 기본 뒤로가기 동작(스택에서 이전 페이지로 이동)을 막기 위해 true 반환
      },
    );

    return () => {
      backHandler.remove(); // 이벤트 리스너 제거
    };
  }, []);

  // 게시글 미리보기 표시
  const renderItem = ({item}) => {
    const postDate = moment(item.createdAt.toDate());
    const today = moment();
    let dateStr = '';
    if (postDate.isSame(today, 'day')) {
      dateStr = postDate.format('hh:mm A');
    } else {
      dateStr = postDate.format('MM월 DD일');
    }
    return (
      <View>
        <TouchableOpacity
          style={styles.postContainer}
          onPress={() => navigation.navigate('게시글', {item, dateStr})}>
          <View style={styles.postHeader}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postTime}>{dateStr}</Text>
          </View>
          <View>
            <Text style={styles.postContent} numberOfLines={2}>
              {item.content}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{route.params.board}</Text>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate('메인')}>
          <Icon name="close" size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={styles.writeContainer}>
        <TouchableOpacity
          style={styles.writeButton}
          onPress={() => navigation.navigate('글쓰기', {board, srcName})}>
          <Text style={{color: 'white'}}>글쓰기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllBoard;
