import React, { createContext, useState, FC, useEffect } from 'react';
import { authService } from '../../../networking/googleCloud/util/Util';
import { AccountFirebaseService } from '../../../networking/googleCloud/AccountFirebaseService';

export type TAuthContextState = {
  userEmail: string;
  userRoles: string[];
  userId: string;
  addEmail: (name: string) => void;
  addId: (id: string) => void;
  addRoles: (roles: string[]) => void;
};

const contextDefaultValues: TAuthContextState = {
  userEmail: '',
  userRoles: [],
  userId: '',
  addEmail: () => {},
  addId: () => {},
  addRoles: () => {},
};

export const AuthContext = createContext<TAuthContextState>(contextDefaultValues);

const AuthProvider: FC = ({ children }) => {
  const userService = new AccountFirebaseService();
  const [userEmail, setUserEmail] = useState<string>(contextDefaultValues.userEmail);
  const [userId, setUserId] = useState<string>(contextDefaultValues.userId);
  const [userRoles, setUserRoles] = useState<string[]>(contextDefaultValues.userRoles);

  const addEmail = (email: string) => setUserEmail(email);
  const addId = (id: string) => setUserId(id);
  const addRoles = (roles: string[]) => setUserRoles(roles);

  async function getUserRecord(email: string) {
    const userData = await userService.useLoadDataFrom(email);
    setUserEmail(userData.email);
    setUserId(userData.id);
    setUserRoles(userData.roles);
    console.log(userEmail);
  }

  useEffect(() => {
    console.log('email AuthContext', userEmail);
    let unsubscribe: { (): void; (): void };
    const getUser = async () => {
      unsubscribe = authService.onAuthStateChanged((user) => {
        if (user) {
          const { email } = user;
          getUserRecord(email as string);
        }
      });
    };
    getUser();
    return function cleanup() {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userEmail,
        userRoles,
        userId,
        addEmail,
        addId,
        addRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
