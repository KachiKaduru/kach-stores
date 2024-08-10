import styles from "./CartItem.module.css";
import delBtn from "../images/bin.svg";

export default function CartItem() {
  return (
    <div className={styles.item}>
      <div className="imgContainer">
        <img src="" alt="" />
      </div>

      <div className="info"></div>

      <div className="other">
        <button>
          <img src={delBtn} alt="" />
        </button>
      </div>
    </div>
  );
}
