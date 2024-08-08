import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect } from "react";

export default function Wishlist() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  // if (!isAuthenticated) {
  //   return null; // or a loading spinner if you want to show something while redirecting
  // }

  return (
    <section>
      <h2>wishlist</h2>
    </section>
  );
}
