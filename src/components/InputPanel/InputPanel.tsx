import React, { FC, useState } from 'react';

import { useSearchParams } from 'react-router-dom';

import galleryImg from '@/assets/gallery.png';
import sendImg from '@/assets/send.png';

import styles from './InputPanel.module.scss';

interface IInputPanelProps {
  sendMessage: (value: string, chatId: string) => void;
}

export const InputPanel: FC<IInputPanelProps> = ({ sendMessage }) => {
  const [message, setMessage] = useState<string>('');
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(message, String(id));
    setMessage('');
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setMessage(e.currentTarget.value);
  };

  return (
    <div className={styles.inputPanel}>
      <div className={styles.filePanel}>
        <input type="file" id="input-file" />
        <label htmlFor="input-file">
          <img className={styles.image} src={galleryImg} alt="Open Gallery" />
        </label>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          value={message}
          onChange={handleChange}
          placeholder="Something..."
          className={styles.input}
        />

        <button type="submit" className={styles.button}>
          <img src={sendImg} />
        </button>
      </form>
    </div>
  );
};
