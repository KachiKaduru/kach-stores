import { useState } from "react";
import styles from "./Signup.module.css";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {
    e.preventDefault();

    const res = await axios.post("https://clothin-line.onrender.com/api/users", {
      email,
      password,
      name: username,
    });

    localStorage.setItem("user", res.data);
    console.log(res);
    navigate("/");
  }

  return (
    <section className={styles.section}>
      <div className={styles.heading}>
        <h1>Create an account</h1>
        <p>Let&apos;s create an account</p>
      </div>

      <form action="" onSubmit={handleSignup}>
        <label htmlFor="password">
          <legend>Full name</legend>
          <input
            type="text"
            id="username"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
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
            required
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
            required
          />
        </label>

        <Button>Sign Up</Button>
      </form>
    </section>
  );
}
