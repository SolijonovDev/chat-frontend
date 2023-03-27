import React, { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

import io from 'socket.io-client';
//@ts-ignore
import { v4 as uuidv4 } from 'uuid';

import { useUser } from './UserProvider';

const SocketContext = createContext<any>(null);

interface ISocketProviderProps {
  id: number | any;
  children: ReactNode;
}

export const SocketProvider: FC<ISocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<any>();
  const { userId } = useUser();

  useEffect((): any => {
    const newSocket = io('http://localhost:4200', { query: { id: userId } });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [userId]);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  return useContext(SocketContext);
};
