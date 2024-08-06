import { NavLink } from "react-router-dom";
import menuImg from "../images/menu.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((s) => !s);
  }

  return (
    <nav className={styles.nav}>
      <div onClick={handleOpen}>
        <img src={menuImg} alt="menu" />
      </div>

      {open && (
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
            <NavLink to="settings">Settings</NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
