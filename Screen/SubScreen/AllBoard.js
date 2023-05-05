import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const DeliveryPosts = () => {
  const [posts, setPosts] = useState([]);
  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection(`posts_전체게시판`)
      // .where('userId', '==', currentUser.uid) // filter posts by userId
      .orderBy('createdAt', 'desc') // order posts by createdAt in descending order
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(doc => {
          posts.push({...doc.data(), id: doc.id});
        });
        setPosts(posts);
      });
    return () => unsubscribe();
  }, []);

  return (
    <View style={{backgroundColor: 'gray'}}>
      {posts.map(post => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
        </View>
      ))}
    </View>
  );
};

export default DeliveryPosts;
