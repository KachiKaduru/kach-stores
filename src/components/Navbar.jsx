import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import menuImg from "../images/menu.svg";
import closeImg from "../images/close.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((s) => !s);
  }

  return (
    <nav className={`${styles.nav}`}>
      <div onClick={handleOpen}>
        <img src={menuImg} alt="menu" />
      </div>

      <div className={`${styles.sideNav} ${open ? styles.width : styles.noWidth}`}>
        <div onClick={handleOpen} className={styles.closeNav}>
          <img src={closeImg} alt="close" />
        </div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="wishlist">Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="cart">Cart</NavLink>
          </li>
          <li>
            <NavLink to="signup">Sign up</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
