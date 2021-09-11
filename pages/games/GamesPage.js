import React from 'react';
import { Main } from 'components';
import { API_URL } from 'constants/app';
import { HtmlHead, Header, PageHeader, GamesTable } from 'features';
import styles from './GamesPage.module.scss';

export default function GamesPage({ games }) {
  return (
    <>
      <HtmlHead title='Games' />
      <Header />
      <Main>
        <PageHeader title='Games' />
        <section className={styles.content}>
          <div className={styles.inner}>
            <GamesTable games={games} />
          </div>
        </section>
      </Main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${API_URL}/games`);
    const games = await response.json();
    return {
      props: {
        games,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
