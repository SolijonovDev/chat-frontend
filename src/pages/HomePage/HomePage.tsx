import React, { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { Text } from '@/components/Text/Text';

import styles from './HomePage.module.scss';

export const HomePage: FC = () => {
  return (
    <div className={styles.home}>
      <Container>
        <Text variant="h1">Home page</Text>
        <Text variant="h2">Home page</Text>
      </Container>
    </div>
  );
};
