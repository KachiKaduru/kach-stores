import Navbar from "./Navbar";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>Discover</h2>

      <Navbar />
    </header>
  );
}
