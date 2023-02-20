import React, { FC } from 'react';

import { Container } from '@/components/Container/Container';

import styles from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <h2>Footer</h2>
      </Container>
    </footer>
  );
};
