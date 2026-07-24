import styles from './page.module.css';

export default function HomePage() {
  return (
    <section className={styles.emptyState}>
      <h1 className={styles.title}>Todavía no hay recetas publicadas.</h1>
      <p className={styles.description}>
        Próximamente encontrarás aquí las recetas validadas y sus variaciones.
      </p>
    </section>
  );
}
