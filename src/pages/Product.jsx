import ProductDetails from "../components/ProductDetails";
import ProductFooter from "../components/ProductFooter";
import ProductHeader from "../components/ProductHeader";

import styles from "./Product.module.css";

export default function Product() {
  return (
    <section className={styles.product}>
      <ProductHeader />
      <ProductDetails />
      <ProductFooter />
    </section>
  );
}
