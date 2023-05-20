// 사용자의 인증 상태를 다양한 화면의 리액트 컴포넌트에서 쉽게 조회할 수 있도록
// Context API를 사용해 AuthContext를 만듦.
// useState를 사용해 user 상태 관리 및 user와 setUse를 Context의 value로 사용
import React, {useContext, createContext, useState} from 'react';

const UserContext = createContext(null);

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider
      children={children}
      value={{
        user,
        setUser,
      }}
    />
  );
}

// 사용자 정보를 조회하고 싶은 경우 const {user}=useUserContext(); 호출
export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('UserContext.Provider is not found');
  }
  return userContext;
}
