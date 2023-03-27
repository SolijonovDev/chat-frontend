import React, { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { useSocket } from './SocketProvider';
import { useUser } from './UserProvider';

const ConversationsContext = createContext<any>(null);

interface IConversationsProps {
  children: ReactNode;
}

export const ConversationsProvider: FC<IConversationsProps> = ({ children }) => {
  const { socket } = useSocket();
  const { userId } = useUser();
  const [messages, setMessages] = useState<object>({});

  useEffect(() => {
    if (!socket) return;
    socket.on('receive-message', (message: string, chatId: string, userId: string) => {
      setMessages(prev => {
        //@ts-ignore
        if (Array.isArray(prev[chatId])) {
          //@ts-ignore
          return { ...prev, [chatId]: [...prev[chatId], { message, userId }] };
        } else {
          return { ...prev, [chatId]: [{ message, userId }] };
        }
      });
    });

    return () => {
      socket.off('receive-message');
    };
  }, [socket]);

  const sendMessage = (value: string, chatId: string): void => {
    socket.emit('send-message', value, chatId, userId, (res: any): any => {
      // console.log(res);
    });
  };

  return (
    <ConversationsContext.Provider
      value={{
        sendMessage,
        messages,
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

export const useConversations = () => useContext(ConversationsContext);
