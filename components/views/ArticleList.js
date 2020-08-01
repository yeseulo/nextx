import Link from 'next/link';
import Head from 'next/head';

const ArticleList = (props) => {
  const [list, setList] = React.useState(props.list || []);
  function reload() {
    console.log('reload');
    // axios.get( ... )
    setList([]);
  }
  return (
    <div>
      <Head>
        <title>Article List</title>
      </Head>
      <h1>Article List</h1>
      <div>
        <button onClick={reload}>새로고침</button>
      </div>
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
        {list.map((item) => (
          <li></li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;