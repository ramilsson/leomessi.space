import Head from 'next/head';

export default function HtmlHead({ title, description = '' }) {
  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={description} />
      <title>{title} &bull; {process.env.NEXT_PUBLIC_APP_TITLE}</title>
    </Head>
  );
}
