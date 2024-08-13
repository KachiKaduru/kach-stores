import { Link } from "react-router-dom";
import styles from "./UserDetails.module.css";

export default function NotLoggedIn() {
  return (
    <div>
      <p className={styles.not}>You have not logged in or signed up yet 😢</p>

      <p>
        Already have an account with us? <Link to="/login">Login</Link>
      </p>

      <p>
        Don&apos;t have an account yet? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}
