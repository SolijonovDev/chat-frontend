import React, { FC } from 'react';

import styles from '@/components/Button/Button.module.scss';
import { IButton } from '@/components/Button/Button.type';

export const Button: FC<IButton> = props => {
  const { children, className, variant, ...rest } = props;
  return (
    <button className={styles.btn} {...rest}>
      Button
    </button>
  );
};
