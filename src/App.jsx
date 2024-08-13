import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useStore } from "./contexts/StoreContext";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Settings from "./pages/Settings";
import Product from "./pages/Product";
import ProductsContainer from "./components/ProductsContainer";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile";

export default function App() {
  const { categoryItems } = useStore();

  return (
    <AuthProvider>
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
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* PROTECTED ROUTES */}
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="cart" element={<Cart />} />
          <Route path="settings" element={<Settings />} />
          {/* <Route path="product" element={<Product />}/> */}
          <Route path="product/:id" element={<Product />} />
          <Route path="profile" element={<Profile />} />

          {/* PAGES that NOT FOUND */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
