import React, { createContext, useContext, useState, useEffect } from "react";
import { setAuthToken, getAuthToken } from "../../utils";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  isAuthenticated: boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(null);

  console.log("AuthProvider rendered with token:", token);

  useEffect(() => {
    const storedToken = getAuthToken();
    if (storedToken) setTokenState(storedToken);
  }, []);

  const setToken = (newToken: string | null) => {
    if (newToken) {
      setAuthToken(newToken);
      setTokenState(newToken);
    } else {
      localStorage.removeItem("AUTH_TOKEN");
      setTokenState(null);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, setToken, isAuthenticated: !!token, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
