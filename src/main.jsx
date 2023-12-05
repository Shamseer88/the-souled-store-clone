import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./provider/UserProvider.jsx";
import { CartProvider } from "./provider/CartProvider.jsx";
import SearchProvider from "./provider/SearchProvider.jsx";
import { WishListProvider } from "./provider/WishListProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CartProvider>
          <SearchProvider>
            <WishListProvider>
              <App />
            </WishListProvider>
          </SearchProvider>
        </CartProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
