import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const nav = useNavigate();
  //function to store the auth token inside the local storage
  function storeToken(aToken) {
    localStorage.setItem("authToken", aToken);
  }
  //function to verify the token that is in the local storage
  function authenticateUser() {
    const tokenInStorage = localStorage.getItem("authToken");
    if (tokenInStorage) {
      axios
        .get("http://localhost:5005/auth/verify", {
          headers: {
            authorization: `Bearer ${tokenInStorage}`,
          },
        })
        .then((res) => {
          console.log("verify route", res.data);
          setCurrentUser(res.data.payload);
          setIsLoading(false);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          setCurrentUser(null);
          setIsLoading(false);
          setIsLoggedIn(false);
        });
    } else {
      setCurrentUser(null);
      setIsLoading(false);
      setIsLoggedIn(false);
    }
  }
  function handleLogout() {
    localStorage.removeItem("authToken");
    nav("/login");
  }
  useEffect(() => {
    authenticateUser();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        isLoggedIn,
        storeToken,
        authenticateUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextWrapper };
