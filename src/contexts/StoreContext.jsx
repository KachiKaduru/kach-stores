import { createContext, useContext, useEffect, useState } from "react";

const URL = `https://bintusstore.vercel.app/`;

const categoryItems = [
  {
    _id: 1,
    text: "Hoodies",
    image: "/hoodies_images/IMG_1622.JPG",
    route: "hoodies",
  },
  {
    _id: 2,
    text: "Tees",
    image: "/tee_images/IMG_0898.JPG",
    route: "tees",
  },
  {
    _id: 3,
    text: "Knitwears",
    image: "/knitwear_images/IMG_1964.JPG",
    route: "knitwears",
  },
  {
    _id: 4,
    text: "Tshirts",
    image: "/tshirt_images/IMG_1628.JPG",
    route: "tshirts",
  },
  {
    _id: 5,
    text: "Caps",
    image: "/cap_images/IMG_1621.JPG",
    route: "caps",
  },
  {
    _id: 6,
    text: "Footwears",
    image: "/footwear_images/IMG_1623.JPG",
    route: "footwears",
  },
  {
    _id: 7,
    text: "Sets",
    image: "/sets_images/IMG_2093.JPG",
    route: "sets",
  },
  {
    _id: 8,
    text: "Pants",
    image: "/pant_images/IMG_1627.JPG",
    route: "pants",
  },
  // {
  //   _id: 9,
  //   text: "Shorts",
  //   image: "/shorts_images/IMG_1619.JPG",
  //   route: "shorts",
  // },
];

const StoreContext = createContext();

function StoreProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const [productItem, setProductItem] = useState({});
  const [productSize, setProductSize] = useState("");
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen((s) => !s);
  }

  const [wishlist, setWishlist] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });

  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  function handleWishlistItems(id) {
    setWishlist((list) => (list.includes(id) ? list.filter((item) => item !== id) : [id, ...list]));
  }

  function handleCart(id, price) {
    setCart((prevCart) =>
      prevCart.some((item) => item.id === id)
        ? prevCart.filter((item) => item.id !== id)
        : [{ id, price, productSize }, ...prevCart]
    );
  }

  useEffect(
    function () {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    },
    [wishlist]
  );

  useEffect(
    function () {
      localStorage.setItem("cart", JSON.stringify(cart));
    },
    [cart]
  );

  return (
    <StoreContext.Provider
      value={{
        URL,
        isLoading,
        setIsLoading,
        categoryItems,
        category,
        setCategory,
        productItem,
        setProductItem,
        wishlist,
        handleWishlistItems,
        cart,
        handleCart,
        productSize,
        setProductSize,
        clicked,
        setClicked,
        open,
        handleOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

function useStore() {
  const context = useContext(StoreContext);

  if (context === undefined) throw new Error("StoreContext was used outside of StoreProvider");
  return context;
}

export { StoreProvider, useStore };
