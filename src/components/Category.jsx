import { NavLink } from "react-router-dom";
import styles from "./Category.module.css";

export default function Category({ item }) {
  function handleClick() {}
  return (
    <NavLink className={styles.catBtn} to={item.route}>
      <button onClick={handleClick}>{item.text}</button>
    </NavLink>
  );
}
