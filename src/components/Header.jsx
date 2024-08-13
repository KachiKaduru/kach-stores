import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { user } = useAuth();
  return (
    <header className={styles.header}>
      <div>
        <h2>Discover</h2>
        {user.name && <p>Hey, {user.name}</p>}
      </div>

      <Navbar />
    </header>
  );
}
