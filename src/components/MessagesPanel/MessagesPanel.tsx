import React from 'react';

import { MessageItem } from '@/components/MessagesPanel/MessageItem/MessageItem';

import styles from './MessagesPanel.module.scss';

export const MessagesPanel = () => {
  return (
    <div className={styles.messagesPanel}>
      <MessageItem />
      <MessageItem />
      <MessageItem align="right" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem align="right" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem align="right" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem align="right" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem align="right" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem align="right" />
      <MessageItem />
      <MessageItem />
    </div>
  );
};
