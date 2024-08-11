import styles from "./CartItem.module.css";
import delBtn from "../images/bin.svg";
import Counter from "./Counter";
import { useStore } from "../contexts/StoreContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@mui/material";

export default function CartItem({ obj }) {
  const { id, productSize: size } = obj;
  const { URL, handleCart, isLoading, setIsLoading } = useStore();
  const [item, setItem] = useState({});
  const [currentCount, setCurrentCount] = useState(1);

  useEffect(
    function () {
      async function getCartItem() {
        setIsLoading(true);
        try {
          const res = await axios.get(`https://clothin-line.onrender.com/api/product/${id}`);
          const data = res.data;
          setItem(data);
        } catch (error) {
          throw new Error(`error: ${error}`);
        } finally {
          setIsLoading(false);
        }
      }
      getCartItem();
    },
    [id, setIsLoading]
  );

  return (
    <div className={styles.item}>
      {isLoading ? (
        <Skeleton variant="rounded" height={70} width={70} />
      ) : (
        <div className={styles.imgContainer}>
          <img src={`${URL}${item.image}`} alt="" />
        </div>
      )}

      <div className={styles.info}>
        {isLoading ? (
          <>
            <Skeleton variant="rounded" width={180} height={30} />
            <Skeleton variant="rounded" width={100} height={15} />
            <Skeleton variant="rounded" width={100} height={15} />
          </>
        ) : (
          <>
            <h5 className="reduce">{item.name}</h5>
            <p> Size {size}</p>
            <h4>N {Number(item.price) * currentCount}</h4>
            {/* <h4>N {item.price}</h4> */}
          </>
        )}
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
