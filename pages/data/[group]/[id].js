function Page(props) {
  return props.path;
}

Page.getInitialProps = async function(context) {
  return {
    path: `/data/${context.query.group}/${context.query.id}`,
  }
}

export default Page;