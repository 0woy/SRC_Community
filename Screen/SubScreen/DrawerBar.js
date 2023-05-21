import React from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  Alert,
  Image,
} from 'react-native';
import styles from '../Style/DawerStyles';
const DrawerBar = ({navigation}) => {
  const list = [
    {idx: 0, title: '작성한 게시글'},
    {idx: 1, title: '댓글 단 게시글'},
    {idx: 2, title: '이메일 변경'},
    {idx: 3, title: '로그아웃'},
    {idx: 4, title: '회원 탈퇴'},
  ];

  return (
    <View style={styles.container}>
      <View>
        {/* 작성한 게시글, 댓글 단 게시글 */}
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('glgl')}>
          <Text style={styles.text}>작성한 게시글</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('glgl')}>
          <Text style={styles.text}>댓글 단 게시글</Text>
        </TouchableOpacity>
      </View>
      <View>
        {/* 이메일, 비밀번호 변경 */}
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('glgl')}>
          <Text style={styles.text}>이메일 변경</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('glgl')}>
          <Text style={styles.text}>비밀번호 변경</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        {/* 로그아웃, 회원 탈퇴 */}
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('glgl')}>
          <Text style={styles.text}>로그아웃</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttons}
          onPress={() => Alert.alert('glgl')}>
          <Text style={styles.text}>회원탈퇴</Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        {list.map(data => (
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 5,
                paddingTop: 27,
                paddingLeft: 37,
                paddingBottom: 20,
              }}
              onPress={() => {
                data.idx === 3
                  ? Alert.alert('로그아웃')
                  : navigation.navigate(data.title);
              }}>
              <Text style={{}}>{data.title}</Text>
            </TouchableOpacity>
          </View>
        ))} */}
    </View>
  );
};

export default DrawerBar;
