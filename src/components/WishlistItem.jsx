import { useEffect, useState } from "react";
import { useStore } from "../contexts/StoreContext";
import LikedButton from "./LikedButton";
import styles from "./WishlistItem.module.css";
import axios from "axios";

export default function WishlistItem({ id }) {
  const { URL, setIsLoading } = useStore();
  const [item, setItem] = useState({});
  const { image, price, name } = item;

  useEffect(
    function () {
      async function getItem() {
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
      getItem();
    },
    [id, setIsLoading]
  );

  return (
    <div className={styles.item}>
      <div className={styles.imgContainer}>
        <img src={`${URL}${image}`} alt="" />
      </div>

      <div className={styles.details}>
        <h4>{name}</h4>

        <p>
          <strong>₦</strong> {price}
        </p>
      </div>

      <LikedButton id={id} className={styles.liked} />
    </div>
  );
}
