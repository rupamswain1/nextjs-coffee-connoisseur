import React, { FC } from 'react';
import { IBannerProps } from './type';
import styles from './Banner.module.css';

const Banner: React.FunctionComponent<IBannerProps> = ({
  buttonText,
  onButtonPress,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.title}>Coffee</span>
        <span className={styles.title}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover Your Local Coffee Shops!</p>
      <button className={styles.button} onClick={onButtonPress}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
