import React, { FC } from 'react';

import { Text } from '@/components/Text/Text';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.contain}>
        <Text variant="h1">Homepage</Text>
      </div>
    </div>
  );
};
