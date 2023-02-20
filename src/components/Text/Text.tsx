import { FC } from 'react';

import cn from 'classnames';

import { IText } from '@/components/Text/Text.type';

import styles from './Text.module.scss';

export const Text: FC<IText> = props => {
  const { className, children, variant = 'h2', ...rest } = props;

  switch (variant) {
    case 'h1':
      return (
        <h1 className={cn(styles.h1, className)} {...rest}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={cn(styles.h2, className)} {...rest}>
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3 className={cn(styles.h3, className)} {...rest}>
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4 className={cn(styles.h4, className)} {...rest}>
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5 className={cn(styles.h5, className)} {...rest}>
          {children}
        </h5>
      );
    case 'body1':
      return (
        <p className={cn(styles.body1, className)} {...rest}>
          {children}
        </p>
      );
    case 'body2':
      return (
        <p className={cn(styles.body2, className)} {...rest}>
          {children}
        </p>
      );
    default:
      return <>{children}</>;
  }
};
