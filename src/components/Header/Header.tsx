import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Recetas Ulises
        </Link>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Inicio
          </Link>
          <Link href="/dulces" className={styles.navLink}>
            Dulces
          </Link>
          <Link href="/saladas" className={styles.navLink}>
            Saladas
          </Link>
        </nav>
      </div>
    </header>
  );
}
