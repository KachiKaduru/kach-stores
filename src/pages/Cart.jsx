import { useEffect } from "react";
import CartItem from "../components/CartItem";
import CompHeader from "../components/CompHeader";
import { useStore } from "../contexts/StoreContext";
import styles from "./Wishlist.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Cart() {
  const { cart } = useStore();
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/signup", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <section>
      <div className={styles.wishlist}>
        <CompHeader heading="my cart" />

        <div className={styles.wishlistContainer}>
          {cart.length < 1 && <p>You&apos;ve not added anything to your cart yet 😥 </p>}
          {cart.map((item) => (
            <CartItem obj={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
