import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStore } from "./contexts/StoreContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import Product from "./pages/Product";
import ProductsContainer from "./components/ProductsContainer";

export default function App() {
  const { categoryItems } = useStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {categoryItems.map((item) => (
            <Route
              path={item.route}
              element={<ProductsContainer text={item.text} />}
              key={item.route}
            />
          ))}
          {/* <Route path="/:route" element={<p></p>}/> */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="cart" element={<Cart />} />
        <Route path="settings" element={<Settings />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}
