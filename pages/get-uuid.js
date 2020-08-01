import styles from '../styles/Home.module.css';
import Link from 'next/link';
import axios from 'axios';

function GetUuid(props) {
  console.log('GetUuid render');
  // const [uuid, setUuid] = React.useState('');
  // React.useEffect(() => {
  //   fetch('/api/uuid')
  //     .then((response) => response.json())
  //     .then((json) => setUuid(json.uuid));
  // }, []);

  console.log(props.debug);

  return (
    <main className={styles.main}>
      <h1>{props.label}</h1>
      <div>{props.uuid}</div>
      <Link href='/'>
        <a>Back</a>
      </Link>
    </main>
  );
}

// getInitialProps
GetUuid.getInitialProps = async function() {
  console.log('GetUuid.getInitialProps');
  const response = await axios.get( 'http://localhost:1234' + '/api/uuid');
  return {
    label: "UUID",
    uuid: response.data.uuid,
    debug: 'debug message'
  }
}

export default GetUuid;