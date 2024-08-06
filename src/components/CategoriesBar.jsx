import styles from "./CategoriesBar.module.css";
import { useStore } from "../contexts/StoreContext";
import Category from "./Category";

export default function CategoriesBar() {
  const { categoryItems } = useStore();

  return (
    <div className={styles.catBar}>
      {categoryItems.map((item) => (
        <Category item={item} key={item._id} />
      ))}
    </div>
  );
}
