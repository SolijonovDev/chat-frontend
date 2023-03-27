import React, { FC } from 'react';

import { Dashboard } from '@/pages/ConversationsPage/Dashboard';
import { Sidebar } from '@/pages/ConversationsPage/Sidebar';

import styles from './ConversationsPage.module.scss';

export const ConversationsPage: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.contain}>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};
