import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Men from "./pages/Men/Men";
import Women from "./pages/Women/Women";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import User from "./pages/User/User";
import TopNavbar from "./components/TopNavbar/TopNavbar";
import SignIn from "./pages/Auth/SignIn/SignIn";
import SignUp from "./pages/Auth/SignUp/SignUp";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import MenCategory from "./pages/Category/MenCategory";
import WomenCategory from "./pages/Category/WomenCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const currentUrl = useLocation();
  console.log("currentURL", currentUrl.pathname);
  return (
    <div>
      <TopNavbar />

      <ToastContainer />

      <Routes>
        <Route path="/" element={<Men />} />
        <Route path="/men" element={<Men />} />
        <Route path="/men/:category" element={<MenCategory />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/:category" element={<WomenCategory />} />
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
