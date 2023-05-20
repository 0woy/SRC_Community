import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import styles from '../Style/BoardStyles';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
import moment from 'moment';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AllBoard = ({navigation, route}) => {
  const [posts, setPosts] = useState([]);
  const db = firebase.firestore();
  let unsubscribe = '';
  const board = route.params && route.params.board;
  const srcName = route.params && route.params.src;

  useEffect(() => {
    let query = db.collection(`posts_${board}`).orderBy('createdAt', 'desc');
    if (board === '자유게시판') {
      query = query.where('src_name', '==', srcName);
    }

    unsubscribe = query.onSnapshot(querySnapshot => {
      const posts = [];
      // 자유게시판인 경우 에러가 발생하여 해당 if문 추가하여 solve
      if (querySnapshot) {
        querySnapshot.forEach(doc => {
          posts.push({...doc.data(), id: doc.id});
        });
        setPosts(posts);
      }
    });
    return () => unsubscribe();
  }, []);

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
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postTime}>{dateStr}</Text>
        </View>
        <View>
          <Text style={styles.postContent} numberOfLines={2}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{route.params.board}</Text>
        <TouchableOpacity
          style={styles.text}
          onPress={() => navigation.navigate('메인화면')}>
          <Text style={styles.text}>X</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

export default AllBoard;
