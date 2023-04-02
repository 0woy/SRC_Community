import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {signUp} from '../lib/auth';

function FindUserScreen({navigation}) {
  const [isRegister, setRegister] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    user_name: '',
    user_id: '',
    src_name: '',
  });

  const resultMessages = {
    'auth/email-already-in-use': '이미 가입된 이메일입니다.',
    'auth/wrong-password': '잘못된 비밀번호입니다.',
    'auth/user-not-found': '존재하지 않는 계정입니다.',
    'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
    'auth/weak-password': '7자 이상의 비밀번호를 입력해 주세요.',
  };

  const handleInputChange = (name, value) => {
    setForm(prevState => ({...prevState, [name]: value}));
  };

  const handleFindID = async () => {
    // Check if email, password, confirmPassword are empty
    if (!form.email || !form.password || !form.confirmPassword) {
      console.log('error!');
      Alert.alert('입력 오류', '모든 필드를 입력해 주세요.');
      return;
    }

    const {email, password, confirmPassword} = form;
    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
      Alert.alert('비밀번호 입력 오류', '비밀번호가 불일치합니다.');
      return;
    }

    try {
      const {user} = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log('User account created with email: ', user.email);
      Alert.alert('회원가입이 완료되었습니다.');
      navigation.navigate('로그인');
      setForm('');
    } catch (e) {
      console.log(e);
      const alertMessage = resultMessages[e.code]
        ? resultMessages[e.code]
        : '알 수 없는 이유로 회원가입에 실패하였습니다.';
      Alert.alert('회원가입 실패', alertMessage);
    }
  };

  return (
    <View style={styles.input}>
      <TextInput
        placeholder="이름"
        onChangeText={value => handleInputChange('user_name', value)}
      />
      <TextInput
        placeholder="학번"
        onChangeText={value => handleInputChange('user_id', value)}
      />
      <TextInput
        placeholder="거주생활관"
        onChangeText={value => handleInputChange('src_name', value)}
      />
      <Button style={styles.btn} title="아이디 찾기" onPress={handleFindID} />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    backgroundColor: 'black',
    color: 'red',
  },
  btn: {
    backgroundColor: '#F24141',
  },
});
export default FindUserScreen;
