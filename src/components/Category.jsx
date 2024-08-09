import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";
import { useStore } from "../contexts/StoreContext";

export default function Category({ item }) {
  const { isLoading } = useStore();

  function handleClick() {
    console.log(isLoading);
  }
  return (
    <NavLink className={styles.catBtn} to={item.route}>
      <button onClick={handleClick}>{item.text}</button>
    </NavLink>
  );
}
