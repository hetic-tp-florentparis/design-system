import React from 'react';
import styles from './Button.module.scss';

type Button = {
  children: string;
  sizeValue: string;
};

export default function Button({ children, sizeValue }: Button) {
  const size: any = { md: styles.button_md, lg: styles.button_lg };

  return (
    <button className={styles.button + ' ' + size[sizeValue]}>
      {children}
    </button>
  );
}
