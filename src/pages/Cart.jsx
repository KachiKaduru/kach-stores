import CompHeader from "../components/CompHeader";
import styles from "./Wishlist.module.css";

export default function Cart() {
  return (
    <section>
      <div className={styles.wishlist}>
        <CompHeader heading="cart" />

        <div className={styles.wishlistContainer}></div>
      </div>
    </section>
  );
}
