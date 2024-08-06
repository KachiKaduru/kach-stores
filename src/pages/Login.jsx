import { useState } from "react";
import styles from "./Signup.module.css";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>Login to your account</h2>
        <p>Let&apos;s get you back into your account</p>
      </div>

      <form action="">
        <label htmlFor="email">
          <legend>Email</legend>

          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <legend>Password</legend>

          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <Button>Login</Button>
      </form>
    </section>
  );
}
