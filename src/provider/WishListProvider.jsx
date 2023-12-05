import { createContext, useContext, useEffect, useState } from "react";
import { projectId, apiUrl } from "../helper/apiDetails";
import { toast } from "react-toastify";

const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [wishListNumber, setWishListNumber] = useState(0);
  const bearerToken = sessionStorage.getItem("authToken");
  console.log("bearer", bearerToken);

  const deleteAnItemFromWishList = async (id) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist/${id}`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      if (response.ok) {
        toast("Product deleted successfully!");
      } else {
        toast("Failed to delete the product!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAllItemsFromWishList = async () => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist/`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      if (response.ok) {
        toast("Wishlist is cleared!");
      } else {
        toast("Failed to clear the wishlist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addToWishList = async (productId) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist`, {
        method: "PATCH",
        headers: {
          projectID: projectId,
          "Content-Type": "application/json",
          Authorization: `Bearer ${bearerToken}`,
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });
      if (response.ok) {
        toast("Product added to wish list!");
      } else {
        toast("Product adding into wishlist failed!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getWishListItems = async () => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/wishlist`, {
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      const jsonData = await response.json();
      setWishListNumber(jsonData.results);
      setWishList(jsonData.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const removeFromWishList = () => {};
  return (
    <WishListContext.Provider
      value={{
        wishListNumber,
        wishList,
        addToWishList,
        removeFromWishList,
        getWishListItems,
        deleteAnItemFromWishList,
        deleteAllItemsFromWishList,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};
