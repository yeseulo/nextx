import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { DatePicker } from 'antd';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Link href='/articles'>
          <a>Article List</a>
        </Link>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Button
        </button>
        <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        <DatePicker />
      </main>
    </div>
  );
}
