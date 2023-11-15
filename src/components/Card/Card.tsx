import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

interface ICardProps {
  cardName: string;
  imageUrl: string;
  href: string;
  alt: string;
}

const Card: React.FC<ICardProps> = ({ cardName, imageUrl, href, alt }) => {
  return (
    <Link href={href}>
      <div>
        <h2>{cardName}</h2>
        <Image src={imageUrl} alt={alt} width={250} height={300} />
      </div>
    </Link>
  );
};

export default Card;
