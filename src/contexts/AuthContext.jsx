import { createContext, useContext, useState } from "react";
import { useStore } from "./StoreContext";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { setCategory } = useStore();
  const [user, setUser] = useState({});

  const [isAuthenticated, setIsAuthenticated] = useState(function () {
    const currentUser = localStorage.getItem("user");
    return currentUser;
  });

  function login(user) {
    localStorage.setItem("user", user);
    setIsAuthenticated(true);
    setUser({ name: user.name, email: user.email });
    setCategory([]);
  }

  function logout() {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser({});
    setCategory([]);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("AuthContext was used outside of AuthProvider");
  return context;
}

export { AuthProvider, useAuth };
