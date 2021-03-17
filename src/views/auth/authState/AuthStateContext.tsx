import React, { createContext, useState, FC } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AuthFirebaseService  } from '../../../networking/googleCloud/AuthFirebaseService';

export type TAuthContextState = {
  user: {};
};

const contextDefaultValues: TAuthContextState = {
  user: {},
};

export const AuthContext = createContext<TAuthContextState>(contextDefaultValues);

const AuthProvider: FC = ({ children }) => {
    const auth = new AuthFirebaseService();

    const [user, setUser] = useState<{}>(contextDefaultValues.user);

    const { isLoading, data, isError, error } = useQuery("userAuthUpdate", auth.updateUserAuth);

    return (
      <AuthContext.Provider
        value={{
          user,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
}