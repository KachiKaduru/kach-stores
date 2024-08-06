import { useState } from "react";
import styles from "./Signup.module.css";
import Button from "../components/Button";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>Create an account</h1>
        <p>Let&apos;s create an account</p>
      </div>

      <form action="" onSubmit={handleSignup}>
        <label htmlFor="username">
          <legend>Full name</legend>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
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

        <Button>Sign Up</Button>
      </form>
    </section>
  );
}
