import Head from 'next/head';
import { APP_TITLE, APP_DESCRIPTION } from 'constants/app';

export default function HtmlHead({ title, description = APP_DESCRIPTION }) {
  return (
    <Head>
      <link rel='icon' href='/favicon.ico' />
      <meta name='description' content={description} />
      <title>
        {title} &bull; {APP_TITLE}
      </title>
    </Head>
  );
}
