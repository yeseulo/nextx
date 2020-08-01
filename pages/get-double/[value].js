import styles from '../../styles/Home.module.css';
import { Button } from 'antd';
import axios from 'axios';
import Router from 'next/router';

function GetDouble(props) {
  return (
    <main className={styles.main}>
      <h2>{props.value}</h2>
      <Button onClick={() => Router.back()}>돌아가기</Button>
    </main>
  );
}

GetDouble.getInitialProps = async function(context) {
  const value = context.query.value;
  const response = await axios.get('http://localhost:1234' + '/api/double?value=' + value);
  return { value: response.data.value }
}

export default GetDouble;