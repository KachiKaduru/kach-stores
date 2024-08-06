import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.css";
import backArrow from "../images/back-arrow.svg";

export default function BackButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <button className={styles.backBtn} onClick={handleClick}>
      <img src={backArrow} alt="Go back" />
    </button>
  );
}
