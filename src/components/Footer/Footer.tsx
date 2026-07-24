import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.brand}>Recetas Ulises</span>
        <span>&copy; {currentYear} Ulises Pereyra Almena</span>
      </div>
    </footer>
  );
}
