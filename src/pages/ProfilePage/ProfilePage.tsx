import React, { FC } from 'react';

import { Container } from '@/components/Container/Container';
import { Text } from '@/components/Text/Text';

import styles from './ProfilePage.module.scss';

export const ProfilePage: FC = () => {
  return (
    <div className={styles.profile}>
      <Container>
        <Text variant="h1">Profile page</Text>
        <Text variant="h2">Profile page</Text>
        <Text variant="h3">Profile page</Text>
        <Text variant="h4">Profile page</Text>
      </Container>
    </div>
  );
};
