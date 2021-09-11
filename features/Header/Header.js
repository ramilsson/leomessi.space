import Link from 'next/link';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href='/'>
          <a className={styles.logo}>
            <img src='/logo.svg' alt='Leo Messi Space' width={160} />
          </a>
        </Link>
      </div>
    </header>
  );
}
