import Button from "./Button";
import styles from "./CartFooter.module.css";

export default function CartFooter() {
  return (
    <div className={styles.footer}>
      <Button>Checkout &rarr;</Button>
    </div>
  );
}
