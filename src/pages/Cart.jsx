import CartItem from "../components/CartItem";
import CompHeader from "../components/CompHeader";
import { useStore } from "../contexts/StoreContext";
import styles from "./Wishlist.module.css";

export default function Cart() {
  const { cart } = useStore();
  // console.log(cart);

  return (
    <section>
      <div className={styles.wishlist}>
        <CompHeader heading="my cart" />

        <div className={styles.wishlistContainer}>
          {cart.map((item) => (
            <CartItem obj={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
