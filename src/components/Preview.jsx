import { Link } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import styles from "./Preview.module.css";
import Heart from "./Heart";

export default function Preview({ item }) {
  const { URL, addToWishlist } = useStore();
  const { _id } = item;

  function handleLiked() {
    console.log(_id);
  }

  return (
    <Link to={`/product/${_id}`}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          {/* the SPAN below is necessary for the styling */}
          <span className={styles.top}></span>

          <div
            className={styles.heartContainer}
            onClick={(e) => {
              e.preventDefault();
              // console.log(_id);
              addToWishlist(_id);
            }}
          >
            <Heart />
          </div>
          <img src={`${URL}${item.image}`} alt="" />
        </div>

        <div className={styles.info}>
          <h4>{item.name}</h4>
          <p>N {item.price}</p>
        </div>
      </div>
    </Link>
  );
}
