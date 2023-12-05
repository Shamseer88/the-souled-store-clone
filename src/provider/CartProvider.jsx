import { createContext, useContext, useEffect, useState } from "react";
import { projectId, apiUrl } from "../helper/apiDetails";
import { toast } from "react-toastify";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const authToken = sessionStorage.getItem("authToken");
  if (authToken) console.log("Token:", authToken);
  const [cartData, setCartData] = useState(null);

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
      setCartData(data);
      console.log("Initial cart data", cartData);
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
      const updatedCartData = await response.json();
      setCartData(updatedCartData);
      if (response.ok) {
        return toast("Added to cart");
      }
      console.log("Updated cart", updatedCartData);
    } catch (error) {
      console.log("Error adding product into cart", error);
    }
  };

  useEffect(() => {
    getCartData();
  }, []);

  const contextValue = { cartData, addToCart };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
