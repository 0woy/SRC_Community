import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';

const FreeBoard = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const db = firebase.firestore();

  useEffect(() => {
    const unsubscribe = db
      .collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const posts = [];
        querySnapshot.forEach(doc => {
          posts.push({...doc.data(), id: doc.id});
        });
        setPosts(posts);
      });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    try {
      const currentUser = firebase.auth().currentUser;
      const createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection('posts').add({
        title,
        content,
        createdAt,
        userId: currentUser.uid,
      });
      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Board</Text>
      <TextInput value={title} onChangeText={setTitle} placeholder="Title" />
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Content"
      />
      <Button title="Submit" onPress={handleSubmit} />
      {posts.map(post => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.content}</Text>
          <Text>{post.userId}</Text>
        </View>
      ))}
    </View>
  );
};

export default FreeBoard;
