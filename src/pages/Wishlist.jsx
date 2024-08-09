import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";
import styles from "./Wishlist.module.css";
import BackButton from "../components/BackButton";
import { useStore } from "../contexts/StoreContext";
import WishlistItem from "../components/WishlistItem";
import Spinner from "../components/Spinner";

export default function Wishlist() {
  const { wishlist, isLoading } = useStore();
  const { isAuthenticated } = useAuth();

  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  return (
    <section>
      <div className={styles.wishlist}>
        <header>
          <BackButton />

          <h2>My Wishlist</h2>
        </header>

        <div className={styles.wishlistContainer}>
          {wishlist.length < 1 && <p>You have not liked any item yet 😢</p>}

          {isLoading && <Spinner />}

          {wishlist.map((item) => (
            <WishlistItem id={item} key={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
