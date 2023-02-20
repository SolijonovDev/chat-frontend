import React, { FC } from 'react';

import cn from 'classnames';

import { IMessageItem } from '@/components/MessagesPanel/MessageItem/MessageItem.type';

import styles from './MessageItem.module.scss';

export const MessageItem: FC<IMessageItem> = ({ align }) => {
  return (
    <div className={cn(styles.messageItem, { [styles.myMessage]: align === 'right' })}>
      MessageItem
    </div>
  );
};
