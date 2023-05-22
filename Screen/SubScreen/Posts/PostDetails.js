import {React, useState, useEffect} from 'react';
import {View, Text, TextInput, BackHandler, Pressable} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {firebase} from '@react-native-firebase/auth';
import styles from '../../Style/PostsStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import usePostActions from '../../hooks/usePostAction';
import ActionSheetModal from '../../hooks/ActionSheetModal';

function PostDetails({navigation, route}) {
  const item = route.params.item;
  const dateStr = route.params.dateStr;

  const currentUser = firebase.auth().currentUser;
  const db = firebase.firestore();
  //console.log('id:', item, 'currentUser:', currentUser.uid);

  const {isSelecting, onPressMore, onClose, actions} = usePostActions({
    navigation,
  });
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
        navigation.navigate(item.board, {
          board: item.board,
          src: item.src_name,
        });
        return true; // 기본 뒤로가기 동작(스택에서 이전 페이지로 이동)을 막기 위해 true 반환
      },
    );

    return () => {
      backHandler.remove(); // 이벤트 리스너 제거
    };
  }, []);

  return (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back-ios" size={30} color="gray" />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>{item.board}</Text>
          {
            // 해당 게시글이 현재 유저가 작성한 게시글인 경우
            item.userId === currentUser.uid && (
              <TouchableOpacity onPress={() => onPressMore(item)}>
                <Icon name="more-vert" size={30} color="gray" />
              </TouchableOpacity>
            )
          }
        </View>
      </View>
      <ActionSheetModal
        visible={isSelecting}
        actions={actions}
        onClose={onClose}
      />

      <View style={styles.postContentContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.postTitle}>{item.title}</Text>
          <Text style={styles.postTime}>{dateStr}</Text>
        </View>
        <View>
          <Text style={styles.postContent}>{item.content}</Text>
        </View>
      </View>
      <View style={styles.postCommentContainer}>
        <Text style={{color: 'black'}}>댓글 달리는 곳</Text>
      </View>
      <View style={styles.commentContainer}>
        {/* Add comment functionality here */}
        <TextInput
          style={styles.commentInput}
          placeholder="댓글을 입력하세요."
          placeholderTextColor={'black'}></TextInput>
      </View>
    </View>
  );
}

export default PostDetails;
