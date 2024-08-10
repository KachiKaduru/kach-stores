import { Skeleton } from "@mui/material";
import { useStore } from "../contexts/StoreContext";
import Button from "./Button";
import styles from "./ProductFooter.module.css";

export default function ProductFooter() {
  const { productItem, isLoading, handleCart, cart } = useStore();

  const { price, _id } = productItem;
  const added = cart.includes(_id);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.details}>
          <p>Price</p>

          {isLoading ? <Skeleton variant="rounded" width={80} height={20} /> : <h2> N {price}</h2>}
        </div>

        <Button
          className={added ? `${styles.added}` : ""}
          onClick={() => {
            if (added) return;
            handleCart(_id);
          }}
        >
          {added ? "Added to cart 🎉" : "🛒 Add to Cart"}
        </Button>
      </div>
    </footer>
  );
}
