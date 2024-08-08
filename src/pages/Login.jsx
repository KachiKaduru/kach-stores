import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Signup.module.css";
import Button from "../components/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const res = await axios.post("https://clothin-line.onrender.com/api/users/login", {
        email,
        password,
      });

      localStorage.setItem("user", res.data);
      navigate("/");
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data.message);
    }
  }

  function removeErrorMessaage() {
    if (errorMessage) setErrorMessage(null);
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
            onClick={removeErrorMessaage}
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
            onClick={removeErrorMessaage}
          />
        </label>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <Button>Login</Button>
      </form>

      <p>
        You don&apos;t have an account, <Link to="/signup">Sign up</Link>
      </p>
    </section>
  );
}
