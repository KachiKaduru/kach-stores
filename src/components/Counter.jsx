import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter({ onSetCount }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    const amount = count + 1;
    setCount(amount);
    onSetCount(amount);
  }

  function handleSubtract() {
    if (count === 1) return;
    const amount = count - 1;
    setCount(amount);
    onSetCount(amount);
  }

  return (
    <div className={styles.counter}>
      <button onClick={handleSubtract}>-</button>
      <p>
        {" "}
        <strong>{count}</strong>
      </p>
      <button onClick={handleAdd}>+</button>
    </div>
  );
}
