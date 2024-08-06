import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";

export default function Category({ item, onClick }) {
  return (
    <NavLink className={styles.catBtn} to={item.route}>
      <button onClick={onClick}>{item.text}</button>
    </NavLink>
  );
}
