import React, { FC } from 'react';

import { Dashboard } from '@/pages/HomePage/Dashboard';
import { Sidebar } from '@/pages/HomePage/Sidebar';

// import { Container } from '@/components/Container/Container';
import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.contain}>
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};
