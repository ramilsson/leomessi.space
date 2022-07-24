import styles from './GamePageHeader.module.scss';

export default function GamePageHeader({ game }) {
  const [homeTeam, awayTeam] =
    game.field === 'HOME'
      ? [game.team.name, game.opponent.name]
      : [game.opponent.name, game.team.name];

  const result = `${game.result.total[0]} : ${game.result.total[1]}`;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          {homeTeam} <span className={styles.result}>{result}</span> {awayTeam}
        </h1>
      </div>
    </header>
  );
}
