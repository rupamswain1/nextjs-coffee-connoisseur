import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './card.module.css';
import cls from 'classnames';
interface ICardProps {
  cardName: string;
  imageUrl: string;
  href: string;
  alt: string;
}

const Card: React.FC<ICardProps> = ({ cardName, imageUrl, href, alt }) => {
  return (
    <div className={cls(styles.cardContainer, 'glassMorph')}>
      <Link href={href}>
        <div className={styles.headerContainer}>
          <h2>{cardName}</h2>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={imageUrl}
            alt={alt}
            fill={true}
            style={{ borderRadius: '5%' }}
          />
        </div>
      </Link>
    </div>
  );
};

export default Card;
