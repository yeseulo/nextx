import ArticleList from '../../components/views/ArticleList';

const Articles = (props) => {
  return <ArticleList {...props} />;
};

Articles.getInitialProps = async function () {
  // await
  return {
    list: [],
  };
};

export default Articles;