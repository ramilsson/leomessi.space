import React from 'react';
import { API_URL } from 'constants/app';
import { HtmlHead, Header, GamePageHeader } from 'features';
import styles from './GamePage.module.scss';

export default function GamePage({ game }) {
  return (
    <>
      <HtmlHead title={`Game #${game.id}`} />
      <Header />
      <GamePageHeader game={game} />
      <section className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.meta}>
            <p>
              <span className={styles.metaLabel}>Date</span>
              <br />
              {game.datetime}
            </p>
            <p>
              <span className={styles.metaLabel}>Competition</span>
              <br />
              {game.competition.name}
            </p>
            <p>
              <span className={styles.metaLabel}>Season</span>
              <br />
              {game.season}
            </p>
            <p>
              <span className={styles.metaLabel}>Stadium</span>
              <br />
              {game.stadium.name}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  const params = context.params;

  try {
    const response = await fetch(`${API_URL}/games/${params.gameId}`);
    const game = await response.json();
    return {
      props: {
        game,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
