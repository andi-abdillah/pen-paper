import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")) || null
  );

  const login = (user) => {
    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const logout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ loggedInUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
