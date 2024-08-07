import { useStore } from "../contexts/StoreContext";
import styles from "./ProductDetails.module.css";
import SizesButton from "./SizesButton";

const sizes = ["S", "M", "L", "XL", "2XL"];

export default function ProductDetails() {
  const { URL, productItem } = useStore();
  const { image, name } = productItem;

  return (
    <div className={styles.details}>
      <div className={styles.imgContainer}>
        <img src={`${URL}${image}`} alt="" />
      </div>

      <div className="info">
        <h3>{name}</h3>
        <p>reviews</p>
        <p>
          THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR
          COMFORT IN THE SLEEVES AND WAIST.
        </p>
      </div>

      <div className="sizes">
        <h4>choose size</h4>

        {sizes.map((size) => (
          <SizesButton key={size}>{size}</SizesButton>
        ))}
      </div>
    </div>
  );
}
