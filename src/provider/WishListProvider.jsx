import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const addToWishList = () => {};
  const removeFromWishList = () => {};
  return (
    <WishListContext.Provider
      value={(wishList, addToWishList, removeFromWishList)}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};
