import Link from 'next/link';
import { Tag } from 'components';
import styles from './GamesTable.module.scss';

export default function GamesTable({ games }) {
  return (
    <table className={styles.gamesTable}>
      <thead>
        <tr>
          <th>Date</th>
          <th></th>
          <th>Game</th>
          <th className={styles.resultCell}>Result</th>
        </tr>
      </thead>
      <tbody>
        {games.map((game) => (
          <GameRow game={game} key={game.id} />
        ))}
      </tbody>
    </table>
  );
}

function GameRow({ game }) {
  const { id, team, opponent, field, datetime, competition, result } = game;
  const title =
    field === 1
      ? `${team.name} – ${opponent.name}`
      : `${opponent.name} – ${team.name}`;
  const [homeResult, awayResult] =
    field === 1 ? result.total : result.total.slice().reverse();

  return (
    <tr>
      <td className={styles.dateTimeCell}>{datetime.slice(0, 10)}</td>
      <td>
        <Tag size='small'>{competition.name}</Tag>
      </td>
      <td className={styles.titleCell}>
        <Link href={`/games/${id}`}>
          <a>{title}</a>
        </Link>
      </td>
      <td className={styles.resultCell}>
        <Link href={`/games/${id}`}>
          <a
            className={styles.resultButton}
          >{`${homeResult} : ${awayResult}`}</a>
        </Link>
      </td>
    </tr>
  );
}
