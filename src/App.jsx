import React from "react";
import { Route, Routes } from "react-router-dom";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import User from "./pages/User/User";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import Category from "./pages/Category/Category";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

export default function App() {
  return (
    <div>
      <TopNavbar />

      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/:category" element={<Category />} />
        <Route path="/women" element={<Women />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/user" element={<User />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}
