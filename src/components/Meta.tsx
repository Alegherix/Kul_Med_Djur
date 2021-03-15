import Head from 'next/head';

const Meta: React.FC = () => {
  return (
    <Head>
      <title>Kul med djur</title>
      <link rel="icon" href="/static/favicons/favicon.ico" />
      <meta property="og:title" content="Kul med djur" key="title" />
      <meta
        property="og:description"
        content="A website for the upcoming event 'Kul med djur', which is a fictional event aimed at inviting customers and potential customers to a day at delsjön to learn more about taking care of their pets."
        key="description"
      />
      <meta
        name="description"
        content="A website for the upcoming event 'Kul med djur', which is a fictional event aimed at inviting customers and potential customers to a day at delsjön to learn more about taking care of their pets."
      ></meta>
    </Head>
  );
};

export default Meta;
