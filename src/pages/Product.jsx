import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";
import ProductFooter from "../components/ProductFooter";
import ProductHeader from "../components/ProductHeader";

import styles from "./Product.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useStore } from "../contexts/StoreContext";

// https://clothin-line.onrender.com/api/product/${id}

export default function Product() {
  const { id } = useParams();
  const { setProductItem, productItem } = useStore();

  useEffect(
    function () {
      async function getItem() {
        try {
          const res = await axios.get(`https://clothin-line.onrender.com/api/product/${id}`);
          const data = res.data;
          setProductItem(data);
        } catch (error) {
          throw new Error(`error: ${error}`);
        }
      }
      getItem();
    },
    [id, setProductItem]
  );

  return (
    <section className={styles.product}>
      <ProductHeader />
      <ProductDetails />
      <ProductFooter />
    </section>
  );
}
