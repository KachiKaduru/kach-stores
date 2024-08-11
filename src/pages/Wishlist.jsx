import { useEffect } from "react";
import { redirect, replace, useNavigate } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import { useAuth } from "../contexts/AuthContext";
import styles from "./Wishlist.module.css";

import WishlistItem from "../components/WishlistItem";
import Spinner from "../components/Spinner";
import CompHeader from "../components/CompHeader";

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
        <CompHeader heading={"wishlist"} />

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
