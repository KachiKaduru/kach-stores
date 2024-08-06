import { useStore } from "../contexts/StoreContext";
import styles from "./Preview.module.css";

export default function Preview({ item }) {
  const { URL } = useStore();

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        {/* the DIV below is necessary for the styling */}
        <div></div>
        <img src={`${URL}${item.image}`} alt="" />
      </div>

      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>N {item.price}</p>
      </div>
    </div>
  );
}
