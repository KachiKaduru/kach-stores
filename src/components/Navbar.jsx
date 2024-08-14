import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import menuImg from "../images/menu.svg";
import closeImg from "../images/close.svg";
import { useStore } from "../contexts/StoreContext";
import { useAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { setCategory, open, handleOpen } = useStore();
  const { user } = useAuth();

  // function handleAutoClose(e) {
  //   if (e.target.className === "nav") handleOpen();
  // }

  return (
    <nav className={`${styles.nav}`}>
      <div onClick={handleOpen}>
        <img src={menuImg} alt="menu" />
      </div>

      <div className={`${styles.sideNav} ${open ? styles.width : styles.noWidth}`}>
        <div onClick={handleOpen} className={styles.closeNav}>
          <img src={closeImg} alt="close" />
        </div>

        <div className={styles.links}>
          <ul>
            {/* onClick={(e) => handleAutoClose(e)} */}
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
              {!user.name && (
                <Link className="nav" to="signup">
                  Sign up
                </Link>
              )}
            </li>
          </ul>

          <ul>
            <li>
              <Link to="profile">
                Profile
                {user.name ? `  (${user.name})` : null}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
