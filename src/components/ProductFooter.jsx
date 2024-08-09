import Button from "./Button";
import styles from "./ProductFooter.module.css";

export default function ProductFooter() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Price</p>
        <h3>N 2000</h3>
      </div>

      <Button> 🛒 Add to Cart</Button>
    </footer>
  );
}
