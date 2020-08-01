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
        <Link href='/get-uuid'>
          <a>Get UUID</a>
        </Link>
        <Link href="/get-double/[value]" as='/get-double/11'>
          <a>Get Double 11</a>
        </Link>
        <Link href="/get-double/[value]" as='/get-double/33'>
          <a>Get Double 33</a>
        </Link>
        <DatePicker />
      </main>
    </div>
  );
}
