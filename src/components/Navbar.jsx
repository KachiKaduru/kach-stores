import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import menuImg from "../images/menu.svg";
import closeImg from "../images/close.svg";
import { useStore } from "../contexts/StoreContext";

export default function Navbar() {
  const { setCategory } = useStore();
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((s) => !s);
  }

  function handleAutoClose(e) {
    if (e.target.className === "nav") setOpen((s) => !s);
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

        <ul onClick={(e) => handleAutoClose(e)}>
          <li onClick={() => setCategory([])}>
            <Link className="nav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav" to="wishlist">
              Wishlist
            </Link>
          </li>
          <li>
            <Link className="nav" to="cart">
              Cart
            </Link>
          </li>
          <li>
            <Link className="nav" to="signup">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
