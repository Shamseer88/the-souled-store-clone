import { createContext, useContext, useEffect, useState } from "react";
import { projectId, apiUrl } from "../helper/apiDetails";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const authToken = sessionStorage.getItem("authToken");
  const [cartData, setCartData] = useState(null);
  const [cartNumber, setCartNumber] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  // Fetch initial cart data
  const getCartData = async () => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/cart`, {
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = await response.json();
      setCartData(data.data.items);
      setCartNumber(data.results);
      setCartTotal(data.data.totalPrice);
    } catch (error) {
      console.log("Error fetching cart", error);
    }
  };

  // Add data to cart
  const addToCart = async (productId, quantity, size) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/cart/${productId}`, {
        method: "PATCH",
        headers: {
          projectID: projectId,
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          quantity: quantity,
          size: size,
        }),
      });
      if (response.ok) {
        toast("Product added to cart successfully!");
      } else {
        toast("Product adding to cart failed!");
      }
    } catch (error) {
      console.log("Error adding product into cart", error);
    }
  };

  // Delete an item from cart
  const deleteAnItemFromCart = async (id) => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/cart/${id}`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
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

  // Clear cart
  const deleteAllItemsFromCart = async () => {
    try {
      const response = await fetch(`${apiUrl}ecommerce/cart/`, {
        method: "DELETE",
        headers: {
          projectID: projectId,
          Authorization: `Bearer ${authToken}`,
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

  const contextValue = {
    cartNumber,
    cartData,
    cartTotal,
    addToCart,
    getCartData,
    deleteAnItemFromCart,
    deleteAllItemsFromCart,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
