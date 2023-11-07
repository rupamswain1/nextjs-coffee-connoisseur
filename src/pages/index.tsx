import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner/Banner';

const inter = Inter({ subsets: ['latin'] });

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
      <main className={`${styles.main} ${inter.className}`}>
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
      </main>
    </>
  );
}
