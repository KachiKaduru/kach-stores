import styles from "./ProductDetails.module.css";
import SizesButton from "./SizesButton";

const sizes = ["S", "M", "L", "XL", "2XL"];

export default function ProductDetails() {
  return (
    <div className={styles.details}>
      <div className={styles.imgContainer}>
        <img src="" alt="" />
      </div>

      <div className="info">
        <h3>heading</h3>
        <p>reviews</p>
        <p>
          THE NAME SAYS IT ALL, THE RIGHT SIZE SLIGHTLY SNUGS THE BODY LEAVING ENOUGH ROOM FOR
          COMFORT IN THE SLEEVES AND WAIST.
        </p>
      </div>

      <div>
        <h4>choose size</h4>

        {sizes.map((size) => (
          <SizesButton key={size}>{size}</SizesButton>
        ))}
      </div>
    </div>
  );
}
