import React, {useState} from 'react';
import {View, TextInput, Alert, Text, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './Style/RegisterStyles.js';
import {createUser} from '../lib/user.js';
function SignUpScreen({navigation}) {
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

  const handleRegister = async () => {
    //Check the email is school mail
    if (!form.email.includes('sch.ac.kr')) {
      Alert.alert(
        '이메일 오류',
        '순천향대학교 이메일을 사용해 주세요.(@sch.ac.kr)',
      );
      return;
    }
    if (!form.email || !form.password || !form.confirmPassword) {
      // Check if email, password, confirmPassword are empty
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
      createUser({
        email: user.email,
        user_name: form.user_name,
        user_id: form.user_id,
        src_name: form.src_name,
      });
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
    <View style={styles.subContainer}>
      <View style={styles.deepContainer}>
        <Text style={{color: 'black'}}>*이름/학번은 ID 찾기에 사용됩니다.</Text>
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={styles.textInput}
          placeholder="이름"
          onChangeText={value => handleInputChange('user_name', value)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="학번"
          keyboardType="numeric"
          placeholderTextColor={'#A9A9A9'}
          onChangeText={value => handleInputChange('user_id', value)}
        />
      </View>

      <View style={styles.deepContainer}>
        <Text style={{color: 'black'}}>*이메일 주소는 ID로 사용됩니다.</Text>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#A9A9A9'}
          placeholder="사용할 이메일 주소"
          keyboardType="email-address"
          onChangeText={value => handleInputChange('email', value)}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#A9A9A9'}
          placeholder="비밀번호 입력"
          secureTextEntry
          onChangeText={value => handleInputChange('password', value)}
        />
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'#A9A9A9'}
          placeholder="비밀번호 재입력"
          secureTextEntry
          onChangeText={value => handleInputChange('confirmPassword', value)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="거주생활관 (예: 향설3관)"
          placeholderTextColor={'#A9A9A9'}
          onChangeText={value => handleInputChange('src_name', value)}
        />
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUpScreen;
