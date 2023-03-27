import React, { FC } from 'react';

import { useUser } from '@/context/UserProvider';

import { MessageItem } from '@/components/MessagesPanel/MessageItem/MessageItem';

import styles from './MessagesPanel.module.scss';

interface IMessage {
  userId: string;
  message: string;
}

interface IMessagesPanelProps {
  messages: IMessage[];
}

export const MessagesPanel: FC<IMessagesPanelProps> = ({ messages }) => {
  const { userId: currentUserId } = useUser();
  return (
    <div className={styles.messagesPanel}>
      {messages.map((message, index) => {
        console.log('userId', message.userId);
        console.log('currentUserid', currentUserId);
        return (
          <MessageItem
            align={currentUserId == message.userId}
            message={message.message}
            key={index}
          />
        );
      })}
    </div>
  );
};
