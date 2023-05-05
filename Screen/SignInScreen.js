import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './Style/RegisterStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function SignInScreen({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const resultMessages = {
    'auth/wrong-password': '잘못된 비밀번호입니다.',
    'auth/user-not-found': '존재하지 않는 계정입니다.',
    'auth/invalid-email': '유효하지 않은 이메일 주소입니다.',
    'auth/weak-password': '7자 이상의 비밀번호를 입력해 주세요.',
  };

  const handleInputChange = (name, value) => {
    setForm(prevState => ({...prevState, [name]: value}));
  };

  const handleSignIn = async () => {
    if (!form.email || !form.password) {
      Alert.alert('입력오류', '모든 필드를 입력해 주세요.');
      return;
    }

    const {email, password} = form;

    try {
      const {user} = await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('메인화면');
    } catch (e) {
      const alertMessage = resultMessages[e.code]
        ? resultMessages[e.code]
        : '알 수 없는 이유로 로그인에 실패하였습니다.';
      Alert.alert('로그인 실패', alertMessage);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.deepContainer}>
        <Text
          style={{
            marginBottom: 50,
            fontSize: 27,
            fontWeight: 'bold',
            color: 'white',
          }}>
          순천향대 기숙사 커뮤니티
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="이메일"
          onChangeText={value => handleInputChange('email', value)}
          placeholderTextColor={'gray'}
          keyboardType="email-address"
          style={styles.textInput}
        />
        <TextInput
          placeholder="비밀번호"
          secureTextEntry
          placeholderTextColor={'gray'}
          style={styles.textInput}
          onChangeText={value => handleInputChange('password', value)}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('아이디/비밀번호찾기')}>
          <Text
            style={{
              color: 'green',
              textDecorationLine: 'underline',
              fontSize: 15,
              fontWeight: 'bold',
            }}>
            아이디/비밀번호찾기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}
          onPress={() => navigation.navigate('회원가입')}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignInScreen;
