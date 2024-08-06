import { useState } from "react";
import styles from "./Searchbar.module.css";
import searchImg from "../images/search-icon.svg";

export default function Searchbar() {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.search}>
      <img src={searchImg} alt="?" />
      <input
        type="search"
        name=""
        id=""
        placeholder="Search anything"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
