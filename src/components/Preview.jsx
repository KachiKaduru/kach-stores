import styles from "./Preview.module.css";

const url = `https://bintusstore.vercel.app`;
export default function Preview({ item }) {
  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <div></div>
        <img src={`${url}${item.image}`} alt="" />
      </div>

      <div className={styles.info}>
        <h4>{item.name}</h4>
        <p>N {item.price}</p>
      </div>
    </div>
  );
}
