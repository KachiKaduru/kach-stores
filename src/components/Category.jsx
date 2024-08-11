import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";

export default function Category({ item }) {
  return (
    <NavLink className={styles.catBtn} to={item.route}>
      <button>{item.text}</button>
    </NavLink>
  );
}
