import BackButton from "./BackButton";
import styles from "./CompHeader.module.css";

export default function CompHeader({ heading = "" }) {
  return (
    <header className={styles.header}>
      <BackButton />

      <h2>{heading}</h2>
    </header>
  );
}
