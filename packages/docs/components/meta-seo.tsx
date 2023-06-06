import Head from 'next/head';

export default props => (
  <Head>
    {props.description ? (
      <meta name="description" property="og:description" content={props.description} key="description" />
    ) : null}

    {props.keywords ? <meta name="keywords" content={props.keywords} key="keywords" /> : null}
  </Head>
);
