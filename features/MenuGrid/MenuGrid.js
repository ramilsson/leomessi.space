import Link from 'next/link';
import styles from 'styles/MenuGrid.module.scss';

export default function MenuGrid({ menuItems }) {
  return (
    <nav className={styles.menu}>
      <div className={styles.inner}>
        {menuItems.map((item) => (
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
