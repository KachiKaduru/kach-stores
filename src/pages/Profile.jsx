import CompHeader from "../components/CompHeader";
import UserDetails from "../components/UserDetails";
import styles from "./Profile.module.css";

export default function Profile() {
  return (
    <section className={styles.profile}>
      <CompHeader heading="User Profile" />

      <UserDetails />
    </section>
  );
}
