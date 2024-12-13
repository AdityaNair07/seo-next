import Head from "next/head";

const Meta = ({ title, desc, imageUrl }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={desc} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={desc} />
    <meta property="og:image" content={imageUrl} />
    {/* <meta property="og:url" content={} /> */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={desc} />
    <meta name="twitter:image" content={imageUrl} />

    <h1>{title}</h1>
  </Head>
);

export default Meta;
