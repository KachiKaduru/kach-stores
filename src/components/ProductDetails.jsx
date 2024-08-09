import { useStore } from "../contexts/StoreContext";
import LikedButton from "./LikedButton";
import styles from "./ProductDetails.module.css";
import SizesButton from "./SizesButton";
import Spinner from "./Spinner";

const sizes = ["S", "M", "L", "XL", "2XL"];

export default function ProductDetails({ id }) {
  const { URL, productItem, isLoading } = useStore();
  const { image, name } = productItem;

  return (
    <div className={styles.details}>
      <div className={styles.imgContainer}>
        {isLoading ? <Spinner /> : <img src={`${URL}${image}`} alt="" />}
      </div>

      <div className={styles.info}>
        <div>
          <h3>{name}</h3>
          <LikedButton id={id} width={30} height={30} />
        </div>
        <p>reviews</p>
        <p>
          The name says it all, the right size slightly snugs the body leaving enough room for
          comfort in the sleeves and waist.
        </p>
      </div>

      <div className={styles.sizes}>
        <h4>Choose size</h4>

        <div>
          {sizes.map((size) => (
            <SizesButton key={size}>{size}</SizesButton>
          ))}
        </div>
      </div>
    </div>
  );
}
