import styles from "./SizesButton.module.css";

export default function SizesButton({ children, onClick }) {
  return (
    <button className={styles.sizeBtn} onClick={onClick}>
      {children}
    </button>
  );
}
