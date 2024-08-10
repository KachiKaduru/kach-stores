import styles from "./CartItem.module.css";
import delBtn from "../images/bin.svg";
import Counter from "./Counter";
import { useStore } from "../contexts/StoreContext";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CartItem({ obj }) {
  const { id, productSize: size } = obj;
  const { URL, handleCart } = useStore();
  const [item, setItem] = useState({});
  const [currentCount, setCurrentCount] = useState(1);

  useEffect(
    function () {
      async function getCartItem() {
        // setIsLoading(true);
        try {
          const res = await axios.get(`https://clothin-line.onrender.com/api/product/${id}`);
          const data = res.data;
          setItem(data);
        } catch (error) {
          throw new Error(`error: ${error}`);
        } finally {
          // setIsLoading(false);
        }
      }
      getCartItem();
    },
    [id]
  );

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={`${URL}${item.image}`} alt="" />
      </div>

      <div className={styles.info}>
        <h5>{item.name}</h5>
        <p> Size {size}</p>

        <h4>N {item.price * currentCount}</h4>
      </div>

      <div className={styles.other}>
        <button onClick={() => handleCart(id)} className={styles.delBtn}>
          <img src={delBtn} alt="" />
        </button>

        <Counter onSetCount={setCurrentCount} />
      </div>
    </div>
  );
}
