import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, TextInput, Platform, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../Style/ModifyStyles';
import firestore from '@react-native-firebase/firestore';

function ModifyPost({navigation}) {
  const {params} = useRoute();
  // 라우트 파라미터의 description을 초깃값으로 사용
  const [description, setDescription] = useState(params.item.content);

  const onSubmit = useCallback(async () => {
    const postsCollection = firestore().collection(
      `posts_${params.item.board}`,
    );
    postsCollection.doc(params.item.id).update({
      content: description,
    });

    navigation.pop();
  }, [navigation, params.item.id, description]);

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={30} color="gray" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>게시글 수정</Text>
          <TouchableOpacity onPress={onSubmit}>
            <Icon name="check" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.postContentContainer}>
        <TextInput
          style={styles.input}
          multiline={true}
          placeholder="본문을 입력하세요..."
          placeholderTextColor={'black'}
          textAlignVertical="top"
          value={description}
          onChangeText={setDescription}
        />
      </View>
    </View>
  );
}

export default ModifyPost;
