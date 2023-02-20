import React, { useState } from 'react';

import galleryImg from '@/assets/gallery.png';
import sendImg from '@/assets/send.png';

import styles from './InputPanel.module.scss';

export const InputPanel = () => {
  const [message, setMessage] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('e', e);
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
