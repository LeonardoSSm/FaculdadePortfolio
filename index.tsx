import Head from 'next/head';
import Navbar from '../components/ui/Navbar';
import styles from '../../styles/home.module.scss';
import Image from 'next/image';
import fotoImg from '../../public/fotoImg.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.homeLeftSide}>
          <h1>Olá eu sou o Leonardo Sousa</h1>
          <h2>Desenvolvedor Back-End</h2>
        </div>
        <div className={styles.homeRightSide}>
        <Image 
            className={styles.homeImg}
            src={fotoImg}
            alt="Profile Picture"
            objectFit="cover"
          />
        </div>
      </main>
    </div>
  );
}
