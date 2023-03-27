import React, { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

//@ts-ignore
import { v4 as uuidv4 } from 'uuid';

const UserContext = createContext<any>(null);

interface IUserProviderProps {
  children: ReactNode;
}

export const UserProvider: FC<IUserProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const start = async () => {
      const userId = localStorage.getItem('user-id');
      if (!userId) {
        const id = await uuidv4();
        await localStorage.setItem('userId', id);
        setUserId(id);
      }
    };

    start();
  }, []);

  return <UserContext.Provider value={{ userId }}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
