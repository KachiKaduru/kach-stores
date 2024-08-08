import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();

    const res = await axios.post("https://clothin-line.onrender.com/api/users/login", {
      email,
      password,
    });

    localStorage.setItem("user", res.data);
    console.log(res);
    navigate("/");
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h2>Login to your account</h2>
        <p>Let&apos;s get you back into your account</p>
      </div>

      <form action="" onSubmit={handleLogin}>
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
