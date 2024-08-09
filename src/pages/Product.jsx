import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../contexts/StoreContext";
import ProductDetails from "../components/ProductDetails";
import ProductFooter from "../components/ProductFooter";
import ProductHeader from "../components/ProductHeader";

import styles from "./Product.module.css";

// https://clothin-line.onrender.com/api/product/${id}

export default function Product() {
  const { id } = useParams();
  const { productItem, setProductItem, setIsLoading } = useStore();

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
    <section className={styles.product}>
      <ProductHeader />
      <ProductDetails id={id} />
      <ProductFooter />
    </section>
  );
}
