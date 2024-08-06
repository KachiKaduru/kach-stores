import styles from "./ProductsContainer.module.css";

export default function ProductsContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
