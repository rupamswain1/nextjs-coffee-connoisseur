import React, { FC } from 'react';
import { IBannerProps } from './type';
import styles from './Banner.module.css';

const Banner: React.FunctionComponent<IBannerProps> = ({
  buttonText,
  onButtonPress,
}) => {
  return (
    <div className={styles.bannerContainer}>
      <h1 className={styles.title}>
        <span className={styles.title1}>Coffee</span>
        <span className={styles.title2}>Connoisseur</span>
      </h1>
      <p className={styles.subtitle}>Discover Your Local Coffee Shops!</p>
      <button className={styles.button} onClick={onButtonPress}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
