import { useStore } from "../contexts/StoreContext";
import Heart from "./Heart";

export default function LikedButton({ id, width, height, className }) {
  const { wishlist, handleWishlistItems } = useStore();
  const liked = wishlist.includes(id);

  return (
    <div
      className={className}
      onClick={(e) => {
        e.preventDefault();
        handleWishlistItems(id);
      }}
      style={{
        cursor: "pointer",
      }}
    >
      {liked ? (
        <Heart fill="#e10000" stroke="#e10000" width={width} height={height} />
      ) : (
        <Heart width={width} height={height} />
      )}
    </div>
  );
}
