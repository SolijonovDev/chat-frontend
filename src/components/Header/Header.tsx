import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from '@/components/Container/Container';

import { links } from '@/config/nav';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.contain}>
        <h2>Header</h2>
        <nav className={styles.nav}>
          {links.map(link => (
            <li key={link.id}>
              <Link to={link.href}>{link.name}</Link>
            </li>
          ))}
        </nav>
      </Container>
    </header>
  );
};
