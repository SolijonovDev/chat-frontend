import React from 'react';

import cn from 'classnames';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const items = [
  {
    id: '70001',
    name: 'Javascript jobs',
  },
  {
    id: '70002',
    name: 'Ustoz shogird',
  },
];

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.contain}>
        {items.map(({ id, name }) => (
          <Link to={`?id=${id}`} key={id}>
            <div className={styles.item}>{name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};
