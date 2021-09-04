import styles from 'styles/PageHeader.module.scss';

export default function PageHeader({ title, description = '' }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <h1 className={styles.title}>{title}</h1>
        {description && <h2 className={styles.description}>{description}</h2>}
      </div>
    </header>
  );
}
