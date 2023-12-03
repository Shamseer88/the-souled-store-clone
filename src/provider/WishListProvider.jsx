import { createContext, useState } from "react";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const addToWishList = (productId) => {};
  return <WishListContext.Provider>{children}</WishListContext.Provider>;
};
