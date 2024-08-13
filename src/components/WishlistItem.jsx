import { useEffect, useState } from "react";
import { useStore } from "../contexts/StoreContext";
import LikedButton from "./LikedButton";
import styles from "./WishlistItem.module.css";
import axios from "axios";
import { Skeleton } from "@mui/material";

export default function WishlistItem({ id }) {
  const { URL, setIsLoading, isLoading } = useStore();
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
      {isLoading ? (
        <Skeleton variant="rounded" height={70} width={70} />
      ) : (
        <div className={styles.imgContainer}>
          <img src={`${URL}${image}`} alt="" />
        </div>
      )}

      <div className={styles.details}>
        {isLoading ? (
          <>
            <Skeleton variant="rounded" width={145} height={40} />
            <Skeleton variant="rounded" width={100} height={22} />
          </>
        ) : (
          <>
            <h4 className="reduce">{name}</h4>
            <p>
              <strong>₦ {price}</strong>
            </p>
          </>
        )}
      </div>

      <LikedButton id={id} className={styles.liked} />
    </div>
  );
}
