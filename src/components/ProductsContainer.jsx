import { useEffect } from "react";
import Preview from "./Preview";
import styles from "./ProductsContainer.module.css";
import axios from "axios";
// import Spinner from "./Spinner";
import { useStore } from "../contexts/StoreContext";

export default function ProductsContainer({ text }) {
  const { category, setCategory, isLoading, setIsLoading } = useStore();

  useEffect(
    function () {
      async function getCategory() {
        setIsLoading(true);
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
          setIsLoading(false);
        }
      }
      getCategory();
    },
    [text, setCategory, setIsLoading]
  );
  return (
    <main>
      <div className={styles.container}>
        {category.map((item) => (
          <Preview item={item} key={item._id} />
        ))}
      </div>
      {/* {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.container}>
          {category.map((item) => (
            <Preview item={item} key={item._id} />
          ))}
        </div>
      )} */}
    </main>
  );
}
