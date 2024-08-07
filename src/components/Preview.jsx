import { Link, useNavigate } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import styles from "./Preview.module.css";

export default function Preview({ item }) {
  const navigate = useNavigate();
  const { URL } = useStore();

  function handleClick() {
    navigate("/product");
  }
  return (
    <div className={styles.card} onClick={handleClick}>
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
