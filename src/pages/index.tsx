import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';

export default function Home() {
  const handleButtonPress = () => {
    console.log('button clicked');
  };
  return (
    <>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <Banner
          buttonText="View Stores Nearby"
          onButtonPress={handleButtonPress}
        />
        <div className={styles.heroImage}>
          <Image
            src="/static/hero-image.png"
            alt="Banner Image"
            width={700}
            height={400}
          />
        </div>
        <div className={styles.flex}>
          <Card
            cardName="Test Card"
            imageUrl="/static/hero-image.png"
            alt="hero image"
            href="/coffee-store/test"
          />
          <Card
            cardName="Test Card"
            imageUrl="/static/hero-image.png"
            alt="hero image"
            href="/coffee-store/test"
          />
        </div>
      </main>
    </>
  );
}
