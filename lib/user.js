// user 이메일을 이용해 정보를 저장하고 받아오는 함수
import firestore from '@react-native-firebase/firestore';

export const userCollection = firestore().collection('users');

export function createUser({email, user_name, user_id, src_name}) {
  return userCollection.doc(email).set({
    user_id,
    email,
    user_name,
    src_name,
  });
}

export async function getUser(email) {
  const doc = await userCollection.doc(email).get();
  return doc.data();
}
