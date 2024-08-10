// import { useState } from "react";
import styles from "./SizesButton.module.css";

export default function SizesButton({ children, onClick, className }) {
  return (
    <button className={`${styles.sizeBtn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
