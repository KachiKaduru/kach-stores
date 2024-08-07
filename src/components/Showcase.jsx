import styles from "./Showcase.module.css";

export default function Showcase({ children }) {
  return <div className={styles.showcase}>{children}</div>;
}
