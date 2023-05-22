import {useState} from 'react';
import {ActionSheetIOS, Platform} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function usePostActions({navigation}) {
  const [isSelecting, setIsSelecting] = useState(false);
  const [item, setItem] = useState('');

  const edit = item => {
    navigation.navigate('게시글 수정', {
      item,
    });
  };

  const remove = item => {
    const postsCollection = firestore().collection(`posts_${item.board}`);
    postsCollection.doc(item.id).delete();
    navigation.pop();
  };

  const onPressMore = item => {
    setItem(item);
    if (Platform.OS === 'android') {
      setIsSelecting(true);
    }
  };

  const actions = [
    {
      icon: 'edit',
      text: '게시글 수정',
      item: item,
      onPress: edit,
    },
    {
      icon: 'delete',
      text: '게시물 삭제',
      item: item,
      onPress: remove,
    },
  ];

  const onClose = () => {
    setIsSelecting(false);
  };

  return {
    isSelecting,
    onPressMore,
    onClose,
    actions,
  };
}
export default usePostActions;
