import styles from './GamePageHeader.module.scss';

export default function GamePageHeader({ game }) {
  const result = `${game.result.total[0]} : ${game.result.total[1]}`;
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {game.team.name} <span className={styles.result}>{result}</span>{' '}
          {game.opponent.name}
        </h1>
      </div>
    </header>
  );
}
