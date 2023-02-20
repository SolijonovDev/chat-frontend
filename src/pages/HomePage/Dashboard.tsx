import React from 'react';

import { InputPanel } from '@/components/InputPanel/InputPanel';
import { MessagesPanel } from '@/components/MessagesPanel/MessagesPanel';

import styles from './Dashboard.module.scss';

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <MessagesPanel />
      <InputPanel />
    </div>
  );
};
