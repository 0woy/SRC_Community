import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import Fstyles from './Style/FindUserStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';

function FindUserScreen({navigation}) {
  const [isID, setID] = useState(true);
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

  const toggleID = value => {
    setID(value);
    console.log(value);
  };

  return isID ? (
    <View style={Fstyles.container}>
      <View style={Fstyles.subContainer}>
        <TouchableOpacity style={{marginHorizontal: 20}}>
          <Text style={Fstyles.text}>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => toggleID(false)}
          style={{marginHorizontal: 20}}>
          <Text style={Fstyles.buttonText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={Fstyles.textInput}
          placeholder="이름"
          onChangeText={value => handleInputChange('user_name', value)}
        />
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={Fstyles.textInput}
          keyboardType="numeric"
          placeholder="학번"
          onChangeText={value => handleInputChange('user_id', value)}
        />
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={Fstyles.textInput}
          placeholder="거주생활관 (예: 향설3관)"
          onChangeText={value => handleInputChange('src_name', value)}
        />
      </View>
      <View>
        <TouchableOpacity style={Fstyles.button} onPress={handleFindID}>
          <Text style={Fstyles.buttonText}>아이디 찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <View style={Fstyles.container}>
      <View style={Fstyles.subContainer}>
        <TouchableOpacity
          onPress={() => toggleID(true)}
          style={{marginHorizontal: 20}}>
          <Text style={Fstyles.buttonText}>아이디 찾기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{marginHorizontal: 20}}>
          <Text style={Fstyles.text}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={Fstyles.textInput}
          keyboardType="email-address"
          placeholder="가입된 이메일"
          onChangeText={value => handleInputChange('user_name', value)}
        />
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={Fstyles.textInput}
          keyboardType="numeric"
          placeholder="학번"
          onChangeText={value => handleInputChange('user_id', value)}
        />
        <TextInput
          placeholderTextColor={'#A9A9A9'}
          style={Fstyles.textInput}
          placeholder="거주생활관 (예: 향설3관)"
          onChangeText={value => handleInputChange('src_name', value)}
        />
      </View>
      <View>
        <TouchableOpacity style={Fstyles.button} onPress={handleFindID}>
          <Text style={Fstyles.buttonText}>비밀번호 찾기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FindUserScreen;
