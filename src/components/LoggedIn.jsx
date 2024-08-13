import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import styles from "./UserDetails.module.css";

export default function LoggedIn() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
  return (
    <div className={styles.userDetails}>
      <div>
        <h4>Name</h4>
        <input type="text" value={"kachman"} readOnly />
      </div>

      <div>
        <h4>Email</h4>
        <input type="text" value={user.email} readOnly disabled />
      </div>

      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
