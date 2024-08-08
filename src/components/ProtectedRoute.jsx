import { Route, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Component {...props} /> : navigate("/login"))}
    />
  );
}
