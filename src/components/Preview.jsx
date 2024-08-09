import { Link } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import styles from "./Preview.module.css";
import LikedButton from "./LikedButton";

export default function Preview({ item }) {
  const { URL } = useStore();
  const { _id } = item;

  return (
    <Link to={`/product/${_id}`}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          {/* the SPAN below is necessary for the styling */}
          <span className={styles.top}></span>

          <LikedButton className={styles.heartContainer} id={_id} />

          <img src={`${URL}${item.image}`} alt="image" loading="lazy" />
        </div>

        <div className={styles.info}>
          <h4>{item.name}</h4>
          <p>N {item.price}</p>
        </div>
      </div>
    </Link>
  );
}
