import Link from 'next/link';

export default (props) => {
  return (
    <div>
      <h1>Read me</h1>
      <ul>
        <li>
          <Link href='/articles'>
            <a>Back to list</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
