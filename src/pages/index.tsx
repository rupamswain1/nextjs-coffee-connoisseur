import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Banner from '@/components/Banner/Banner';
import Card from '@/components/Card/Card';
import cls from 'classnames';
import coffeeStoreData from '../data/coffee-stores.json';

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStoreData,
    },
  };
}

export default function Home(props) {
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
        {coffeeStoreData.length > 0 && (
          <>
            <div>
              <h2 className={cls(styles.heading2, 'ml-1rem')}>
                Banglore Stores
              </h2>
            </div>
            <div className={styles.flex}>
              {props.coffeeStoreData.map((coffeeStore) => {
                return (
                  <Card
                    cardName={coffeeStore.name}
                    imageUrl={coffeeStore.imgUrl}
                    alt={coffeeStore.name}
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </>
  );
}
