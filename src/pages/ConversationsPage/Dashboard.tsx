import React from 'react';

import { useConversations } from '@/context/ConversationsProvider';
import { useSearchParams } from 'react-router-dom';

import { InputPanel } from '@/components/InputPanel/InputPanel';
import { MessagesPanel } from '@/components/MessagesPanel/MessagesPanel';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  const { sendMessage, messages } = useConversations();
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <div className={styles.dashboard}>
      <MessagesPanel messages={messages[String(id)] ?? []} />
      <InputPanel sendMessage={sendMessage} />
    </div>
  );
};
