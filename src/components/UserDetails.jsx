import { useAuth } from "../contexts/AuthContext";
import NotLoggedIn from "./NotLoggedIn";
import LoggedIn from "./LoggedIn";
import styles from "./UserDetails.module.css";

export default function UserDetails() {
  const { user } = useAuth();

  return (
    <div className={styles.userDetails}>
      {!user.name && <NotLoggedIn />}

      {!user.name || <LoggedIn />}
    </div>
  );
}
