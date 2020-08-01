import Link from 'next/link';
import Head from 'next/head';

const ArticleList = (props) => {
  return (
    <div>
      <Head>
        <title>Article List</title>
      </Head>
      <h1>Article List</h1>
      <ul>
        <li>
          <Link href='/articles/post'>
            <a>Post</a>
          </Link>
        </li>
        <li>
          <Link href='/articles/readme'>
            <a>Read me</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ArticleList;