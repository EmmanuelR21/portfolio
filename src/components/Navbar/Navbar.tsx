import styles from "./index.module.scss";
import Link from "../../routing/Link";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/" cn={styles.navLink}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/projects" cn={styles.navLink}>
            Projects
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/about" cn={styles.navLink}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
