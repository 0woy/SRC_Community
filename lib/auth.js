import auth from '@react-native-firebase/auth';

export function signIn({email, passsword}) {
  console.log('이멜', email, '비번:', passsword);
  return auth().signInWithEmailAndPassword(email, passsword);
}

export function signUp({email, passsword}) {
  console.log(email, passsword);
  return auth().createUserWithEmailAndPassword(email, passsword);
}

//앱 가동, 로그인 상태 변경시 사용자 정보 받아옴
export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}
