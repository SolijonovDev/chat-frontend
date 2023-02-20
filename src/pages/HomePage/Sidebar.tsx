import React from 'react';

import cn from 'classnames';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.contain}>
        <div className={cn(styles.item, styles.active)}>Item</div>
        <div className={styles.item}>Item</div>
        <div className={styles.item}>Item</div>
        <div className={styles.item}>Item</div>
      </div>
    </div>
  );
};
