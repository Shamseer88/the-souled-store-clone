import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const signInContext = (userData) => {
    setUser(userData);
  };
  let isUserLoggedIn = user;
  const value = { user, signInContext, isUserLoggedIn };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUser = () => {
  return useContext(useContext);
};
