import React, { FC } from 'react';

import cn from 'classnames';

import { IContainer } from '@/components/Container/Container.type';

import styles from './Container.module.scss';

export const Container: FC<IContainer> = props => {
  const { className = '', ...rest } = props;
  return <div className={cn(styles.container, { [className]: className })} {...rest} />;
};
