import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import ProductDetails from "../components/ProductDetails";
import ProductFooter from "../components/ProductFooter";

import styles from "./Product.module.css";
import CompHeader from "../components/CompHeader";

export default function Product() {
  const { id } = useParams();
  const { setProductItem, setIsLoading } = useStore();

  useEffect(
    function () {
      async function getItem() {
        setIsLoading(true);
        try {
          const res = await axios.get(`https://clothin-line.onrender.com/api/product/${id}`);
          const data = res.data;
          setProductItem(data);
        } catch (error) {
          throw new Error(`error: ${error}`);
        } finally {
          setIsLoading(false);
        }
      }
      getItem();
    },
    [id, setProductItem, setIsLoading]
  );

  return (
    <div className={styles.div}>
      <section className={styles.product}>
        <CompHeader heading="details" />
        <ProductDetails id={id} />
      </section>
      <ProductFooter id={id} />
    </div>
  );
}
