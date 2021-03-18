import React, { createContext, useState, FC, useEffect } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AuthFirebaseService } from '../../../networking/googleCloud/AuthFirebaseService';

export type TAuthContextState = {
  user: string;
};

const contextDefaultValues: TAuthContextState = {
  user: '' ,
};

export const AuthContext = createContext<TAuthContextState>(contextDefaultValues);

const AuthProvider: FC = ({ children }) => {
  const auth = new AuthFirebaseService();

  const [user, setUser] = useState<string>(contextDefaultValues.user);

  const { isLoading, data, isError, error } = useQuery('userAuthUpdate', auth.updateUserAuth);

  const getUserData = () => {
    setUser(data?.toString() as string);
  };

  useEffect(() => {
    if (isError === false) {
      getUserData();
      console.log(`Data information ${isLoading}`);
      console.log(`Data informationUser ${user}`);
    }
  }, []);

  useEffect(() => {
    getUserData();
    console.log(`Data infor ${data}`);
    console.log(`Data inforUser ${user}`);
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user: data?.toString() as string
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
