import Link from 'next/link';
import { MENU_ITEMS } from './constants';
import styles from './MainMenu.module.scss';

export default function MainMenu() {
  return (
    <nav className={styles.menu}>
      <div className={styles.inner}>
        {MENU_ITEMS.map((item) => (
          <Link key={item.id} href={item.url}>
            <a className={styles.link}>
              <h2>{item.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
}
