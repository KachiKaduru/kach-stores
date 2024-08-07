import { useEffect, useState } from "react";
import Preview from "./Preview";
import styles from "./ProductsContainer.module.css";
import axios from "axios";
import Spinner from "./Spinner";
import { useStore } from "../contexts/StoreContext";

export default function ProductsContainer({ text }) {
  const { category, setCategory } = useStore();
  const [isLoadingCategory, setIsLoadingCategory] = useState(false);

  useEffect(
    function () {
      async function getCategory() {
        setIsLoadingCategory(true);
        try {
          const res = await axios.get(
            `https://clothin-line.onrender.com/api/product?pageNumber=1&category=${text}`
          );
          const data = res.data.data;
          // console.log(data);
          setCategory(data);
        } catch (error) {
          throw new Error(`Error: ${error}`);
        } finally {
          setIsLoadingCategory(false);
        }
      }
      getCategory();
    },
    [text, setCategory]
  );
  return (
    <main>
      {isLoadingCategory ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          {category.map((item) => (
            <Preview item={item} key={item._id} />
          ))}
        </div>
      )}
    </main>
  );
}
