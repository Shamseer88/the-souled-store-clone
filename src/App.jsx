import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import User from "./pages/User/User";
import TopNavbar from "./components/TopNavbar/TopNavbar";

export default function App() {
  return (
    <div>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}
